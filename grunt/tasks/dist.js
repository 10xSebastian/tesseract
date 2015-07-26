module.exports = function(grunt) {

  grunt.registerTask('dist', function () {

    grunt.task.run([
      'clean:dist',
      'copy:dist',
      'compass:dist',
      'concat_css',
      'haml:dist',
      'cssmin:dist',
      'connect:dist',
      'open:dist',
      'webdriver:screenshots'
    ]);
  });
};
