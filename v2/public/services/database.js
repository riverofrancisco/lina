import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabase = supabaseKey && createClient(supabaseUrl, supabaseKey);

export default supabase;
