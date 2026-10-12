interface ImportMetaEnv {
  /** "true" for preview builds: adds noindex meta and a Disallow-all robots.txt */
  readonly PUBLIC_NOINDEX?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
