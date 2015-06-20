module.exports = {
  options: {
    livereload: true
  },
  sass: {
    files: 'src/sass/{**/,}*.sass',
    tasks: ['compass:serve']
  },
  haml: {
    files: 'src/index.haml',
    tasks: ['haml:serve']
  }
};
