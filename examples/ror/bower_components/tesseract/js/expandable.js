jQuery(function(){
  $(document).on('click', '[expandable]', function(){
    var $el = $(this);
    if ($el.attr('expanded')) { // close
      $el.closest('body').children().removeClass('display-none');
      $el.closest('body').find('section').removeClass('display-none');
      $(document).scrollTop($el.offset().top - $('.tesseract-header').height());
      $el.removeAttr('expanded');
    } else { // open
      $el.closest('body').children().addClass('display-none');
      var $parent = $el.closest('section').parent('section');
      $parent.removeClass('display-none');
      $parent.children().addClass('display-none');
      $el.closest('section').removeClass('display-none');
      $(document).scrollTop(0);
      $el.attr('expanded', true);
    }
  });
});