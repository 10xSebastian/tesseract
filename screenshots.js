casper.start('dist/index.html')
.then(function() {
  phantomcss.screenshot('html', 'index');
});