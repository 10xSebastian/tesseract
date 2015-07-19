module.exports = {
  serve: {
    files: [
      {
        expand: true,
        cwd: 'fontawesome',
        src: '**',
        dest: '.tmp/fontawesome'
      },{
        expand: true,
        src: 'js/**',
        dest: '.tmp'
      },{
        expand: true,
        src: 'icons/**',
        dest: '.tmp'
      },{
        expand: true,
        src: 'img/**',
        dest: '.tmp'
      },{
        expand: true,
        cwd: 'bower_components/BrowserDetection/',
        src: 'browser-detection.js',
        dest: '.tmp/js'
      },{
        expand: true,
        cwd: 'icons/',
        src: 'favicon.ico',
        dest: '.tmp'
      }
    ]
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: 'fontawesome',
        src: '**',
        dest: 'dist/fontawesome'
      },{
        expand: true,
        src: 'js/**',
        dest: 'dist'
      },{
        expand: true,
        src: 'icons/**',
        dest: 'dist'
      },{
        expand: true,
        src: 'img/**',
        dest: 'dist'
      },{
        expand: true,
        cwd: 'bower_components/BrowserDetection/',
        src: 'browser-detection.js',
        dest: 'dist/js'
      },{
        expand: true,
        cwd: 'icons/',
        src: 'favicon.ico',
        dest: 'dist'
      }
    ]
  }
};
