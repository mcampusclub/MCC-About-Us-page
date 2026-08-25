const SUPABASE_URL = "https://lfrqmhjlpytvmbncdzpb.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ZkmHM5ggMI172u5c1e-F2Q_0iyLtMGp";

window.supabaseClient = window.supabase ? window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
) : null;