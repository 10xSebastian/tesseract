module.exports = function(grunt) {

  grunt.registerTask('serve', function () {

    grunt.task.run([
      'sass:serve',
      'haml:serve',
      'connect:serve',
      'open:serve',
      'watch'
    ]);
  });
};
