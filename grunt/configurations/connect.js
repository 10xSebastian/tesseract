module.exports = {
  serve: {
    options: {
      livereload: true,
      base: [
        {
          path: '.tmp',
          options: {
            index: 'index.html'
          }
        }, {
          path: '.'
        }
      ]
    }
  }
};
