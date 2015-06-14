module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;
    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });
    return object;
  }

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    env: process.env
  };

  grunt.util._.extend(config, loadConfig('./grunt/configurations/'));
  grunt.initConfig(config);

  grunt.loadTasks('grunt/tasks');
  grunt.registerTask('default', ['serve']);
};
