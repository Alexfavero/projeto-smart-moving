import type { StorybookConfig } from '@storybook/react-vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding'
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    return {
      ...config,
      plugins: [ ...(config.plugins ?? []), react(), tailwindcss() ],
    };
  },
};
export default config;