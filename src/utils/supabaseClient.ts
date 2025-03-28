import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://veceitvtckvyzxrcrxzd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlY2VpdHZ0Y2t2eXp4cmNyeHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxOTMxNTksImV4cCI6MjA1ODc2OTE1OX0.prbGNsixcpDQECI98rRj5mtDJCb1yxvC3bt33nHbasI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)