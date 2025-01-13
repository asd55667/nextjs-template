export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PLATFORM:
        | "vercel"
        | "netlify"
        | "github pages"
        | "cloudflare pages"
        | "cloudflare workers"
        | "vps";
    }
  }
}
