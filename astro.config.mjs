// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// The root URL
	site: 'https://ontology-benchmarks.github.io',
	// The sub-directory for this specific workshop site
	base: '/PROBE26', 
	integrations: [
		starlight({
			title: 'PROBE2026 Webpage',
			favicon: '/uoft-logo.png',
			description: 'Webpage for the PROBE 2026 Ontology Benchmarking Workshop',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://ontology-benchmarks.github.io/PROBE26/' }],
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
