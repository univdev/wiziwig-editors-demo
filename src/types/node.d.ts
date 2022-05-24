declare namespace NodeJS {
  interface ProcessEnv {
    GITHUB_REPOSITORY_URI: string;
    QUILL_REPOSITORY_URI: string;
    TOAST_REPOSITORY_URI: string;
    CODE_MIRROR_REPOSITORY_URI: string;
  }
}