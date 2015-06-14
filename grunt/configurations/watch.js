module.exports = {
  options: {
    livereload: true
  },
  sass: {
    files: 'src/sass/**',
    tasks: ['sass:serve']
  },
  haml: {
    files: 'src/**.haml',
    tasks: ['haml:serve']
  }
};
