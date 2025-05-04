import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { mainlist } from '../main/mainlist';
import { createClient } from '@supabase/supabase-js';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const supabaseUrl = 'https://lgztvgybalhvppkfpwdc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnenR2Z3liYWxodnBwa2Zwd2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNDkwMTQsImV4cCI6MjA1OTkyNTAxNH0.JfB6J38LmdlvUwIgkdRmQcBDnv6OzFaA-D27S0ylVnA'; // 不建議硬編碼在前端，正式上線請用環境變數
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-sub0',
  standalone: true,
  imports: [RouterLink, FormsModule,CommonModule],
  templateUrl: './sub0.component.html',
  styleUrls: ['./sub0.component.css']
})
export class Sub0Component implements OnInit {
  protected readonly mainlist = mainlist;
  inputvalue1 = '';
  inputvalue2 = '';
  isLoggedIn = false;
  currentUserEmail: string | null = null;

  constructor() {}

  async ngOnInit() {
    this.checkSession();
  }

  async checkSession() {
    const sessionData = localStorage.getItem('supabaseSession');
    if (sessionData) {
      this.isLoggedIn = true;
      try {
        const parsed = JSON.parse(sessionData);
        this.currentUserEmail = parsed.session?.user?.email || parsed.user?.email || '已登入';
      } catch (e) {
        console.error('解析 session 失敗', e);
      }
    }
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
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) {
          console.error('獲取 session 失敗:', sessionError);
        } else {
          localStorage.setItem('supabaseSession', JSON.stringify(sessionData));
          this.isLoggedIn = true;
          this.currentUserEmail = this.inputvalue1;
          alert('登入成功！');
        }
      }
    } catch (error) {
      console.error('錯誤:', error);
      alert('發生未知錯誤');
    }
  }

  logout() {
    localStorage.removeItem('supabaseSession');
    this.isLoggedIn = false;
    this.inputvalue1 = '';
    this.inputvalue2 = '';
    this.currentUserEmail = null;
  }
}

