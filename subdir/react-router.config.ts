import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  prerender: ['/'],
  basename: process.env.NODE_ENV === 'development' ? '/extend-apps-explorer/' : undefined
} satisfies Config;
