import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from '../main/mainlist';
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {createClient} from '@supabase/supabase-js';
import { CommonModule } from '@angular/common';

const supabaseUrl = 'https://lgztvgybalhvppkfpwdc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnenR2Z3liYWxodnBwa2Zwd2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNDkwMTQsImV4cCI6MjA1OTkyNTAxNH0.JfB6J38LmdlvUwIgkdRmQcBDnv6OzFaA-D27S0ylVnA';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-sub5',
  imports: [
    RouterLink,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    CommonModule
  ],
  templateUrl: './sub5.component.html',
  styleUrl: './sub5.component.css'
})

export class Sub5Component {

  protected readonly mainlist = mainlist;
  protected mydata:any;

  async ngOnInit() {
    const {data, error} = await supabase
      .from('myangularsub5')
      .select('*');

    if (error) {
      console.error('Supabase 讀取失敗:', error);
      alert('資料讀取失敗，請稍後再試');
    } else {
      console.log('Supabase 資料:', data);
      this.mydata = data;
    }
  }
}
