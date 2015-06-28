casper.start('dist/index.html').then(function() { 

  var name;

  // Overview
  phantomcss.screenshot('html', 'overview'); 

  // Modules
  var modules = this.getElementsInfo('[data-module]');
  for (i = 0; i < modules.length; i++) {
    var module = modules[i];
    name = module.attributes['data-module'];
    phantomcss.screenshot("[data-module='"+name+"']", 'modules/'+name); 
  }

  // Components
  var components = this.getElementsInfo('[data-component]');
  for (i = 0; i < components.length; i++) {
    var component = components[i];
    name = component.attributes['data-component'];
    phantomcss.screenshot("[data-component='"+name+"']", 'components/'+name); 
  }
});