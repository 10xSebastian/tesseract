module.exports = {
  options: {
    require: 'sass-globbing',
    sassDir: 'src/sass',
    sourcemap: true
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
      specify: 'src/sass/cssop.sass'
    }
  }
};
