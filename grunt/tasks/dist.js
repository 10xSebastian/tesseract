module.exports = function(grunt) {

  grunt.registerTask('dist', function () {

    grunt.task.run([
      'clean:dist',
      'sass:dist',
      'haml:dist',
      'cssmin:dist',
      'open:dist'
    ]);
  });
};
