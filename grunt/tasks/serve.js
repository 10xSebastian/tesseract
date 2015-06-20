module.exports = function(grunt) {

  grunt.registerTask('serve', function () {

    grunt.task.run([
      'compass:serve',
      'haml:serve',
      'connect:serve',
      'open:serve',
      'watch'
    ]);
  });
};
