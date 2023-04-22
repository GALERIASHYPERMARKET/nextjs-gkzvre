import { createClient } from "@supabase/supabase-js";

const supabaseUrl ='https://rrdffpiqzfajyovdvcic.supabase.co';
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyZGZmcGlxemZhanlvdmR2Y2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwMDI1NzUsImV4cCI6MTk5NzU3ODU3NX0.YYME1yCQ9Nssor6a98Cwummaqv5WJvIEaHT7Og34xs8';

export const supabase = createClient(supabaseUrl, supabaseKey);