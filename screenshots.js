it('makes screenshots from all modules', function(done) {

  browser
  .url('http://localhost:8000')
  .getAttribute('[data-module]', 'data-module').then(function(names){
    names.forEach(function(name){
      browser.click("[data-module='"+name+"'] [expandable]");
      browser.click("[data-module='"+name+"']");
      browser.saveScreenshot('screenshots/modules/'+name+'.png');
      browser.click("[data-module='"+name+"'] [expandable]");
    });
    done();  
  });

});

it('makes screenshots from all components', function(done) {

  browser
  .url('http://localhost:8000')
  .getAttribute('[data-component]', 'data-component').then(function(names){
    names.forEach(function(name){
      browser.click("[data-component='"+name+"'] [expandable]");
      browser.click("[data-component='"+name+"']");
      browser.saveScreenshot('screenshots/components/'+name+'.png');
      browser.click("[data-component='"+name+"'] [expandable]");
    });
    done();  
  });

});
