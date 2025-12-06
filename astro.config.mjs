import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  // Optional: If you want to tweak Markdown/MDX globally (e.g., for plugins), add here
  // markdown: {
  //   // e.g., syntaxHighlight: 'shiki',
  //   // shikiConfig: { theme: 'dracula' }
  // },
});