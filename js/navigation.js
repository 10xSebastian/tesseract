jQuery(function(){


  var $navigation = $('[navigation]');
  var $navigationName = $navigation.find('[name]');
  var $navigationType = $navigation.find('[type]');

  $(document).on('scroll', _.throttle(function(){

    var sections = [];
    $('section').each(function(i, el){
      var $el = $(el);
      sections.push({
        top: $el.offset().top, 
        el: $el, 
        name: $el.find('h3').text(), 
        type: ($el.data('module') ? 'Modul' : 'Component') 
      });
    });

    var top = $(document).scrollTop() + $navigation.height();
    var currentSection;
    for (i = 0; i < sections.length; i++) { 
      var section = sections[i];
      if(section.top > top) {
        currentSection = sections[i-1];
        break;
      }
    }
    if (!currentSection) {
      currentSection = sections[0];
    }
    $navigationName.text(currentSection.name);
    $navigationType.text(currentSection.type);
  }, 200));
});