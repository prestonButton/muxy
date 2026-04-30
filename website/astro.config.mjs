import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

const site = process.env.ASTRO_SITE ?? 'https://prestonbutton.github.io';
const rawBase = process.env.ASTRO_BASE ?? '/muxy/';
const base = rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}/`;

export default defineConfig({
  site,
  base,
  integrations: [
    tailwind(),
    mdx(),
    icon({
      include: {
        'simple-icons': [
          'zsh',
          'gnubash',
          'fishshell',
          'tmux',
          'neovim',
          'git',
          'nodedotjs',
          'python',
          'docker',
          'rust',
          'claude',
          'openai',
          'cursor',
          'githubcopilot',
          'gnometerminal',
        ],
        lucide: [
          'square-terminal',
          'folder-code',
          'panels-top-left',
          'panel-left',
          'git-branch',
          'palette',
          'keyboard',
          'save',
          'search',
          'smartphone',
          'file-pen',
          'file-text',
        ],
      },
    }),
  ],
  srcDir: './src',
});
