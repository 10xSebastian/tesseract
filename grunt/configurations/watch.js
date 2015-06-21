module.exports = {
  options: {
    livereload: true
  },
  sass: {
    files: 'src/sass/{**/,}*.sass',
    tasks: [
      'compass:serve', 
      'uncss:serve', 
      'diffalert:serve', 
      'csscss:serve', 
      'concat_css:serve'
    ]
  },
  haml: {
    files: 'src/index.haml',
    tasks: [
      'haml:serve', 
      'compass:serve', 
      'uncss:serve', 
      'diffalert:serve', 
      'csscss:serve', 
      'concat_css:serve'
    ]
  }
};
