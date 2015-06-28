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
      specify: 'src/sass/tesseract.sass'
    }
  },
  serve: {
    options : {
      cssDir: '.tmp',
      specify: [
        'src/sass/tesseract.sass',
        'src/sass/tesseract-page.sass'
      ]
    }
  }
};
