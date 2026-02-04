// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// The root URL
	site: 'https://ontology-benchmarks.github.io',
	// The sub-directory for this specific workshop site
	base: '/probe26', 
	integrations: [
		starlight({
			title: 'PROBE 2026',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Ontology-Benchmarks/PROBE26' }],
			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'Challenges',
					autogenerate: { directory: 'challenges'},
				},
			],
		}),
	],
});
