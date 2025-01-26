import { createClient } from '@supabase/supabase-js';

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.warn(
        'Supabase credentials not found. Please connect to Supabase using the "Connect to Supabase" button in the top right corner.'
      );
    }

    export const supabase = createClient(
      supabaseUrl || 'https://placeholder.supabase.co',
      supabaseKey || 'placeholder'
    );

    // Helper function to check if Supabase is properly configured
    export const isSupabaseConfigured = () => {
      return !!supabaseUrl && !!supabaseKey;
    };
