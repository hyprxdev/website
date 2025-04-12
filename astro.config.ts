// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import startlightBlog from "starlight-blog"
import  admonitions  from "remark-github-admonitions-to-directives"
// https://astro.build/config
export default defineConfig({
  site: "https://hyprx.dev",
  markdown: {
	 gfm: true,
	 remarkPlugins: [ admonitions]
  },
  integrations: [
      starlight({
          title: 'Hyprx Dev',
          plugins: [startlightBlog({
              authors: {
                  hyprxdev: {
                      name: 'HyprxDev',
                      title: 'Hyprx Mad Scientist',
                      picture: 'https://avatars.githubusercontent.com/u/180069990?v=4',
                      url: "https://hyprx.dev",
                  }
              },
          })],
		  components: {
			Footer: './src/components/Footer.astro',
			Header: './src/components/Header.astro',
		  },
          social: [
			{ icon: 'github', label: 'GitHub', href: 'https://github.com/hyprxdev' },
			{ icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/hyprxdev' },
		  ],
          sidebar: [
			  {
				  label: 'Docs',
				  link: '/docs/',
			  },
              {
                  label: 'Guides',
                  autogenerate: { directory: 'guides',  collapsed: true },
              },
          ],
      }),
	],
});