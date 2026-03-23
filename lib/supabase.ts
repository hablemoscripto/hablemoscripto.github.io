import { createClient } from '@supabase/supabase-js';
import { captureMessage } from '../utils/errorReporting';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  captureMessage('Supabase credentials not found. Authentication will not work.', 'warning');
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);
