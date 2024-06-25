/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ADMIN_USERNAME: string;
  readonly VITE_ADMIN_PASSWORD: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_USERS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}