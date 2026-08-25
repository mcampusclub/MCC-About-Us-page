window.SUPABASE_URL = "https://lfrqmhjlpytvmbncdzpb.supabase.co";
window.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ZkmHM5ggMI172u5c1e-F2Q_0iyLtMGp";

const SUPABASE_URL = window.SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = window.SUPABASE_PUBLISHABLE_KEY;

try {
    if (window.supabase && typeof window.supabase.createClient === "function") {
        window.supabaseClient = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_PUBLISHABLE_KEY
        );
    }
} catch (e) {
    console.warn("Supabase SDK init notice:", e);
}