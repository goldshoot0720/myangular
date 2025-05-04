import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { mainlist } from '../main/mainlist';
import { sub2data } from './sub2data';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://lgztvgybalhvppkfpwdc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnenR2Z3liYWxodnBwa2Zwd2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNDkwMTQsImV4cCI6MjA1OTkyNTAxNH0.JfB6J38LmdlvUwIgkdRmQcBDnv6OzFaA-D27S0ylVnA';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-sub2',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})


export class Sub2Component {

  protected readonly mainlist = mainlist;
  protected readonly sub2data = sub2data;
  protected uuid: any;

  Sum_of_bank(): number {
    let sum = 0;
    for (let i = 0; i < sub2data.length; i++) {
      sum += Number(sub2data[i].bankvalue);
    }
    return sum;
  }

  async ngOnInit() {
    const { data, error } = await supabase
      .from('myangularsub2')
      .select('*');

    if (error) {
      console.error('Supabase 讀取失敗:', error);
      alert('資料讀取失敗，請稍後再試');
    } else {
      console.log('Supabase 資料:', data);
      this.uuid = data[0].id;
      for (let i = 0; i < sub2data.length; i++) {
        sub2data[i].bankvalue = data[0]['bank' + (i + 1)];
      }
    }
  }


  async Savebank() {
    const isConfirm = confirm("確定修改?!");

    if (isConfirm) {
      const updatePayload = {
        bank1: sub2data[0].bankvalue,
        bank2: sub2data[1].bankvalue,
        bank3: sub2data[2].bankvalue,
        bank4: sub2data[3].bankvalue,
        bank5: sub2data[4].bankvalue,
        bank6: sub2data[5].bankvalue,
        bank7: sub2data[6].bankvalue,
        bank8: sub2data[7].bankvalue,
        bank9: sub2data[8].bankvalue,
        bank10: sub2data[9].bankvalue,
      };

      console.log(this.uuid);

      const {data, error} = await supabase
        .from('myangularsub2')
        .update(updatePayload)
        .eq('id', this.uuid);

      if (error) {
        console.error("更新失敗:", error.message);
      } else {
        console.log("更新成功", data);
        alert("資料修改成功！");
      }

      const { error:error3 } = await supabase  .from('bankhistory')  .insert({
        user: supabase.auth.getUser(),
        bank1: sub2data[0].bankvalue,
        bank2: sub2data[1].bankvalue,
        bank3: sub2data[2].bankvalue,
        bank4: sub2data[3].bankvalue,
        bank5: sub2data[4].bankvalue,
        bank6: sub2data[5].bankvalue,
        bank7: sub2data[6].bankvalue,
        bank8: sub2data[7].bankvalue,
        bank9: sub2data[8].bankvalue,
        bank10: sub2data[9].bankvalue,
        banksum:this.Sum_of_bank(),
        bankdate:new Date()
      })
      console.log(error3);
      console.log('bankhistory');
    }
  }

}
