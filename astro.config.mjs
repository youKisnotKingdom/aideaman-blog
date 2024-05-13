import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import remarkCodeTitles from "remark-code-titles";

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.aideaman.com',
	markdown: { 
		remarkPlugins: [remarkCodeTitles],
		extendDefaultPlugins: true 
	},
	integrations: [mdx(), sitemap()],
});
