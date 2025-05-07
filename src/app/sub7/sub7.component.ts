import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from '../main/mainlist';
import { MatCardModule } from '@angular/material/card';
import {createClient} from '@supabase/supabase-js';
import { CommonModule } from '@angular/common';

const supabaseUrl = 'https://lgztvgybalhvppkfpwdc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnenR2Z3liYWxodnBwa2Zwd2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNDkwMTQsImV4cCI6MjA1OTkyNTAxNH0.JfB6J38LmdlvUwIgkdRmQcBDnv6OzFaA-D27S0ylVnA';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-sub7',
  imports: [
    RouterLink,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './sub7.component.html',
  styleUrl: './sub7.component.css'
})

export class Sub7Component {

  protected readonly mybool1 = true;
  protected readonly mybool3 = false;
  protected readonly mainlist = mainlist;
  protected date0 = new Date();
  protected date10 = new Date("2025-06-15");
  protected datediff0 = Math.floor(
    (this.date10.getTime() - this.date0.getTime()) / (1000 * 60 * 60 * 24)
  );
  protected week0 = Math.floor(this.datediff0 / 7);
  protected day0 = this.datediff0 % 7;
  protected date1 = new Date();
  protected date11 = new Date("2025-06-19");
  protected datediff1 = Math.floor(
    (this.date11.getTime() - this.date1.getTime()) / (1000 * 60 * 60 * 24)
  );
  protected week1 = Math.floor(this.datediff0 / 7);
  protected day1 = this.datediff0 % 7;

  protected date12 = new Date("2025-07-05");
  protected datediff2 = Math.floor(
    (this.date12.getTime() - this.date1.getTime()) / (1000 * 60 * 60 * 24)
  );
  protected week2 = Math.floor(this.datediff2 / 7);
  protected day2 = this.datediff2 % 7;

  protected date13 = new Date("2025-09-17");
  protected datediff3 = Math.floor(
    (this.date13.getTime() - this.date1.getTime()) / (1000 * 60 * 60 * 24)
  );
  protected week3 = Math.floor(this.datediff3 / 7);
  protected day3 = this.datediff3 % 7;

  protected date15 = new Date("2025-11-27");
  protected datediff5 = Math.floor(
    (this.date15.getTime() - this.date1.getTime()) / (1000 * 60 * 60 * 24)
  );
  protected week5 = Math.floor(this.datediff5 / 7);
  protected day5 = this.datediff5 % 7;

  protected data1: any;

  async ngOnInit() {
    const {data, error} = await supabase
      .from('myangularsub7')
      .select('*');

    if (error) {
      console.error('Supabase 讀取失敗:', error);
      alert('資料讀取失敗，請稍後再試');
    } else {
      console.log('Supabase 資料:', data);
      this.data1 = data[0].date1;
    }
  }
}
