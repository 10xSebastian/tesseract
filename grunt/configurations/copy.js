module.exports = {
  dist: {
    expand: true, 
    cwd: '.tmp/screenshots/',
    src: '{**/,}*.png',
    dest: 'screenshots', 
    rename: function(dest, src) {
      return dest+'/'+src.replace(/_\d+/,'');
    }
  }
};
