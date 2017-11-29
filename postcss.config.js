module.exports = ({ file, options, env }) => {
  console.log('OPTIONS: ', options);
  return {
    parser: file.extname === '.sss' ? 'sugarss' : false,
    plugins: {
      'postcss-import': { root: file.dirname },
      'postcss-cssnext': options.cssnext ? options.cssnext : false,
      'cssnano': env === 'production' ? options.cssnano : false
    }
  };
}