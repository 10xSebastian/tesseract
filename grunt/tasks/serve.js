module.exports = function(grunt) {

  grunt.registerTask('serve', function () {

    grunt.task.run([
      'clean:serve',
      'copy:serve',
      'compass:serve',
      'haml:serve',
      // 'uncss:serve',
      'diffalert:serve',
      'csscss:serve',
      'concat_css:serve',
      'connect:serve',
      'open:serve',
      'watch'
    ]);
  });
};
