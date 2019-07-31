module.exports = {
  siteName: 'arson',
  siteDescription: 'Incendiary description goes here',
  siteUrl: 'https://arson.lol',
  plugins: [
    {
      use: '@gridsome/source-ghost',
      options: {
        baseUrl: 'http://localhost:2368',
        contentKey: 'ee52f2fe7ba5fb64f91e024965',
        routes: {
          post: '/:slug',
          tag: '/tag/:slug'
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    }
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        }
      ]
    }
  }
};
