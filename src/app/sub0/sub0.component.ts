import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { mainlist } from '../main/mainlist';
import { createClient } from '@supabase/supabase-js'
import { FormsModule } from '@angular/forms';

const supabaseUrl = 'https://lgztvgybalhvppkfpwdc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnenR2Z3liYWxodnBwa2Zwd2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNDkwMTQsImV4cCI6MjA1OTkyNTAxNH0.JfB6J38LmdlvUwIgkdRmQcBDnv6OzFaA-D27S0ylVnA'
const supabase = createClient(supabaseUrl, supabaseKey)

@Component({
  selector: 'app-sub0',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './sub0.component.html',
  styleUrls: ['./sub0.component.css']
})
export class Sub0Component implements OnInit {
  protected readonly mainlist = mainlist;
  inputvalue1 ="";
  inputvalue2 = "";

  constructor() {}

  async ngOnInit() {

  }

  async onButton1Click() {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: this.inputvalue1,
        password: this.inputvalue2
      });

      if (error) {
        console.error('Error:', error);
        alert('登入失敗，請檢查輸入的電子郵件和密碼');
      } else {
        alert(`登入成功，資料: ${JSON.stringify(data)}`);

        // 使用 supabase.auth.getSession() 來獲取 session
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) {
          console.error('獲取 session 失敗:', sessionError);
        } else {
          // 儲存 session 到 localStorage
          localStorage.setItem('supabaseSession', JSON.stringify(sessionData));
          console.log('Session 儲存成功:', sessionData);
        }

        // 登入成功後的處理邏輯
      }
    } catch (error) {
      console.error('錯誤:', error);
      alert('發生未知錯誤');
    }
  }

}
