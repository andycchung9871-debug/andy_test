import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || '';

// Initialize Supabase client
// Note: If credentials are missing, the app will use mock data for preview
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
