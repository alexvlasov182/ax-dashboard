const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(isProduction ? { cssnano: {} } : {}),
  },
}
