module.exports = function(grunt) {

  grunt.registerTask('serve', function () {

    grunt.task.run([
      'compass:serve',
      'haml:serve',
      'uncss:serve',
      'diffalert:serve',
      'csscss:serve',
      'concat_css:serve',
      'connect:serve',
      'open:serve',
      'watch'
    ]);
  });
};
