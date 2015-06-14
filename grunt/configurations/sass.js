module.exports = {
  options: {
    bundleExec: true,
    require: 'sass-globbing',
    loadPath: 'src/sass'
  },
  dist: {
    files: {
      'dist/cssop.css': 'src/sass/cssop.sass'
    }
  },
  serve: {
    files: {
      '.tmp/cssop.css': 'src/sass/cssop.sass'
    }
  }
};
