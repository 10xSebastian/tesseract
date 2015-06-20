module.exports = {
  options: {
    livereload: true
  },
  sass: {
    files: 'src/sass/**',
    tasks: ['compass:serve']
  },
  haml: {
    files: 'src/**.haml',
    tasks: ['haml:serve']
  }
};
