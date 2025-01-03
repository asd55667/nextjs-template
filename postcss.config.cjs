module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: process.env.NODE_ENV === 'production' ? {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    } : false,
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
        'custom-selectors': true,
      },
    },
  },
  // map: process.env.NODE_ENV === 'development' ? { inline: true } : false
}
