module.exports = {
  options: {
    require: 'sass-globbing',
    sassDir: 'src/sass',
    importPath: ['node_modules'],
    sourcemap: true,
    noLineComments: true
  },
  dist: {
    options : {
      cssDir: 'dist',
      specify: 'src/sass/cssop.sass'
    }
  },
  serve: {
    options : {
      cssDir: '.tmp',
      specify: [
        'src/sass/cssop.sass',
        'src/sass/normalize.sass'
      ]
    }
  }
};
