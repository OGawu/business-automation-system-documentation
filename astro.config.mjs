import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TSCZ USER GUIDE',
			customCss: [
				'./src/styles/custom.css', // Relative path to custom CSS file
			],
			social: {
				youtube: 'https://www.youtube.com/watch',
			},
					
			sidebar: [
						{ label: 'Welcome to the TSCZ System', link: '/gettingstarted/welcome-page/' },
						{ label: 'Log In', link: '/gettingstarted/log-in/' },
						{ label: 'Requisitions', link: '/requisitions/requisitions/' },
						{ label: 'Request Types', link: '/requests/request-types/' },
						{ label: "Director's Scenario", link: '/directorship/directorship/' },
						{ label: 'Alternate Approver', link: '/alternateapprover/alternate-approver/' },
			],
		}),
	],
});
