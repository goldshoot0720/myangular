// src/app/services/supabase.service.ts
import { Injectable } from '@angular/core'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseUrl = 'https://lgztvgybalhvppkfpwdc.supabase.coo'
  private supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnenR2Z3liYWxodnBwa2Zwd2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNDkwMTQsImV4cCI6MjA1OTkyNTAxNH0.JfB6J38LmdlvUwIgkdRmQcBDnv6OzFaA-D27S0ylVnA'
  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey)
  }

  getClient(): SupabaseClient {
    return this.supabase
  }
}
