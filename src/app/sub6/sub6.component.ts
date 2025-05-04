import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { mainlist } from '../main/mainlist';
import { FormsModule } from '@angular/forms';
import { sub6data } from './sub6data';
import { CommonModule } from '@angular/common';
import { createClient } from '@supabase/supabase-js';
import {MatTableModule} from '@angular/material/table';

const supabaseUrl = 'https://lgztvgybalhvppkfpwdc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnenR2Z3liYWxodnBwa2Zwd2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNDkwMTQsImV4cCI6MjA1OTkyNTAxNH0.JfB6J38LmdlvUwIgkdRmQcBDnv6OzFaA-D27S0ylVnA';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-sub6',
  imports: [RouterLink, FormsModule, CommonModule, MatTableModule],
  templateUrl: './sub6.component.html',
  styleUrls: ['./sub6.component.css']
})

export class Sub6Component implements OnInit {

  protected readonly mainlist = mainlist;
  protected sub6data = sub6data;

  textareavalue1 = "";
  textareavalue2 = "";
  textareavalue3 = "";
  textareavalue4 = "";

  // 初始化時從 Supabase 讀取資料
  async ngOnInit() {
    const { data, error } = await supabase
      .from('myangularsub6')
      .select('*');

    if (error) {
      console.error('Supabase 讀取失敗:', error);
      alert('資料讀取失敗，請稍後再試');
    } else {
      console.log('Supabase 資料:', data);
      this.sub6data = data
        .map(row => ({
          id: row.id,
          textareavalue1: row.textareavalue1,
          textareavalue2: row.textareavalue2,
          textareavalue3: row.textareavalue3,
          textareavalue4: row.textareavalue4
        }))
        .sort((a, b) => new Date(a.textareavalue3).getTime() - new Date(b.textareavalue3).getTime());
    }
  }

  // 新增資料
  async onButton1Click() {
    if (!this.textareavalue1 || !this.textareavalue2 || !this.textareavalue3) {
      alert("訂閱項目不得為空值\n訂閱費用不得為空值\n訂閱到期日不得為空值");
    } else {
      // Check if the subscription already exists
      const isDuplicate = this.sub6data.some(item =>
        item.textareavalue1 === this.textareavalue1 &&
        item.textareavalue2 === this.textareavalue2 &&
        item.textareavalue3 === this.textareavalue3 &&
        item.textareavalue4 === this.textareavalue4
      );

      if (isDuplicate) {
        alert("這個訂閱項目已經存在！");
        return;
      }

      let isconfirm = confirm(`新增資料\n${this.textareavalue1}\n${this.textareavalue2}\n${this.textareavalue3}\n${this.textareavalue4}`);
      if (isconfirm) {
        // 確認登入狀態
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {
          alert('未能獲取使用者資訊，請重新登入');
          console.error('取得使用者資訊失敗', userError);
          return;
        }

        // 插入資料到 Supabase
        const { data: insertedData, error } = await supabase
          .from('myangularsub6')
          .insert([
            {
              textareavalue1: this.textareavalue1,
              textareavalue2: this.textareavalue2,
              textareavalue3: this.textareavalue3,
              textareavalue4: this.textareavalue4,
              user: user.email
            }
          ])
          .select(); // 確保返回自動生成的 uuid

        if (error) {
          console.error('新增失敗', error);
          alert(`新增資料失敗: ${error.message}`);
        } else {
          console.log('新增成功', insertedData);
          // Add the new data to the sub6data array and sort it
          this.sub6data = [...this.sub6data, insertedData[0]]
            .sort((a, b) => new Date(a.textareavalue3).getTime() - new Date(b.textareavalue3).getTime());

          // Clear form fields
          this.textareavalue1 = "";
          this.textareavalue2 = "";
          this.textareavalue3 = "";
          this.textareavalue4 = "";

          alert("資料新增成功！");
        }
      }
    }
  }

  // 編輯資料
  editTarget: any = null;
  originalData: any = {};

  editRow(data: any) {
    this.editTarget = data;
    this.originalData = { ...data }; // Copy to revert back on cancel
  }

  // 儲存編輯後的資料
  async saveEdit(data: any) {
    const { error } = await supabase
      .from('myangularsub6')
      .update({
        textareavalue1: data.textareavalue1,
        textareavalue2: data.textareavalue2,
        textareavalue3: data.textareavalue3,
        textareavalue4: data.textareavalue4
      })
      .eq('id', data.id); // Use 'id' for the condition

    if (error) {
      console.error('更新失敗:', error);
      alert(`更新資料失敗: ${error.message}`);
    } else {
      console.log('更新成功');
      // Re-sort the data after updating
      this.sub6data = this.sub6data.map(item =>
        item.id === data.id ? { ...data } : item
      )
        .sort((a, b) => new Date(a.textareavalue3).getTime() - new Date(b.textareavalue3).getTime());

      this.editTarget = null;
      alert("資料更新成功！");
    }
  }

  // 取消編輯
  cancelEdit() {
    Object.assign(this.editTarget, this.originalData);
    this.editTarget = null;
  }

  // 刪除資料
  async onButton3Click(data: any) {
    let isconfirm = confirm(`刪除資料\n${data.textareavalue1}\n${data.textareavalue2}\n${data.textareavalue3}\n${data.textareavalue4}`);

    if (isconfirm) {
      const deleteData = async () => {
        const { error } = await supabase
          .from('myangularsub6')
          .delete()
          .eq('id', data.id);  // Use 'id' for delete condition

        if (error) {
          console.error('刪除失敗:', error);
          alert(`刪除資料失敗: ${error.message}`);
        } else {
          console.log('刪除成功');
          // Filter out the deleted item from the array and re-sort it
          this.sub6data = this.sub6data.filter(item => item.id !== data.id)
            .sort((a, b) => new Date(a.textareavalue3).getTime() - new Date(b.textareavalue3).getTime());
          alert("資料刪除成功！");
        }
      };

      await deleteData();
    }
  }

  Percentsymbol(){
    return ( Number(this.textareavalue4) / Number(this.textareavalue4) ) + "%";
  }
}
