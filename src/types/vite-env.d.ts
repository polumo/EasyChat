/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_BASE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
