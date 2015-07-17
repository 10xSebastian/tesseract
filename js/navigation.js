jQuery(function(){


  var $navigationToggle = $('[navigation-toggle]');
  var $navigation = $('.tesseract-navigation');

  $navigationToggle.on('click', function(){
      $navigation.toggleClass('tesseract-navigation-show');
  });


  $navigation.find('[data-section]').each(function(i, navigationGroup){
    var $navigationGroup = $(navigationGroup);
    $('[data-'+$navigationGroup.data('section')+']').each(function(i, section){
      var $section = $(section);
      var name = $section.data($navigationGroup.data('section'));
      var title = $section.find('h3').text();
      var $navigationItem = $('<li><div class="tesseract-font button text-ellipsis no-border">'+title+'</div></li>');
      $navigationItem.on('click', function(){
        var top = $section.offset().top;
        $(document).scrollTop(top-50);
        $navigation.removeClass('tesseract-navigation-show');
      });
      $navigationGroup.find('ul').append($navigationItem);
    });
  });
  
});