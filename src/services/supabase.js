import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sallahxticqkfljefgmg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhbGxhaHh0aWNxa2ZsamVmZ21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMjc5MjAsImV4cCI6MjA2NzgwMzkyMH0.FTfdLD-zaZ60ZP9BxAZVvhwzVRJw8tAujWfj5IEOWmU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
