module.exports = {
  options: {
    language: 'ruby'
  },
  serve: {
    target: 'html',
    files: {
      '.tmp/index.html': 'src/index.haml'
    }
  },
  dist: {
    target: 'html',
    files: {
      'dist/index.html': 'src/index.haml'
    }
  }
};
