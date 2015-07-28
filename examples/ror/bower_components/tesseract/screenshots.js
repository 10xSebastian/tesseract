browser
.url('http://localhost:8000')
.getAttribute('[data-module]', 'data-module')
.then(function(moduleNames){
  moduleNames.forEach(function(name){
    browser.click('[data-module="'+name+'"] [expandable]');
    browser.saveScreenshot('screenshots/modules/'+name+'.png');
    browser.click('[data-module="'+name+'"] [expandable]');
  });
}.bind(this))
.end();
