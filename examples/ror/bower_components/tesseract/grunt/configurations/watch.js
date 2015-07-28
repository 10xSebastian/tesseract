module.exports = {
  options: {
    livereload: true
  },
  sass: {
    files: 'src/sass/{**/,}*.sass',
    tasks: [
      'clean:serve',
      'copy:serve',
      'haml:serve', 
      'compass:serve', 
      // 'uncss:serve', 
      'diffalert:serve', 
      'csscss:serve', 
      'concat_css:serve'
    ]
  },
  haml: {
    files: 'src/index.haml',
    tasks: [
      'clean:serve',
      'copy:serve',
      'haml:serve', 
      'compass:serve', 
      // 'uncss:serve', 
      'diffalert:serve', 
      'csscss:serve', 
      'concat_css:serve'
    ]
  }
};
