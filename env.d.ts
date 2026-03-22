/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_SUPABASE_SERVICE_KEY?: string;
  readonly VITE_WOMPI_PUBLIC_KEY?: string;
  readonly VITE_GA4_MEASUREMENT_ID?: string;
  readonly VITE_ERROR_REPORTING_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
