module.exports = ({ file, options, env }) => {
  return {
    parser: file.extname === '.sss' ? 'sugarss' : false,
    plugins: {
      'postcss-import': { root: file.dirname },
      'postcss-cssnext': options.cssnext ? options.cssnext : false,
      'cssnano': env === 'production' ? options.cssnano : false
    }
  };
}