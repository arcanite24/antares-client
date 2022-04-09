// eslint-disable-next-line no-undef
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
    port: '/:8001',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-build-script',
      { cmd: 'postcss', input: ['.css'], output: ['.css'] },
    ],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eslint "src/**/*.{js,jsx,ts,tsx}"',
      },
    ],
  ],
  packageOptions: {
    polyfillNode: true,
  },
  devOptions: {
    /* ... */
    port: 8001,
    tailwindConfig: './tailwind.config.js',
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
};
