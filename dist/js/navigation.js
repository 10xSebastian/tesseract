jQuery(function(){


  var $navigationToggle = $('[navigation-toggle]');
  var $navigation = $('.tesseract-navigation');
  var $navigationToggleName = $navigationToggle.find('[name]');

  $navigationToggle.on('click', function(){
      $navigation.toggleClass('show');
      if($navigation.hasClass('show')) {
        $navigation.addClass('z-index-top');
        $navigation.removeClass('z-index-minus');
      } else {
        $navigation.removeClass('z-index-top');
        $navigation.addClass('z-index-minus');
      }
  });

  $(document).on('scroll', _.throttle(function(){
    var sections = [];
    $('section').each(function(i, el){
      var $el = $(el);
      if($el.find('h3').length != 1) { return; }
      sections.push({
        top: $el.offset().top, 
        el: $el, 
        name: $el.find('h3').text()
      });
    });
    var top = $(document).scrollTop() + $navigationToggle.height();
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
    $navigationToggleName.text(currentSection.name);
  }, 200));
});