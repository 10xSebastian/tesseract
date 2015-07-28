jQuery(function(){
  var $header = $('.tesseract-header');
  var $navigation = $('.tesseract-navigation');
  var $tesseract = $('.tesseract-container');
  $(document).on('scroll', _.throttle(function(){
    var bottom = $tesseract.offset().top + $tesseract.height();
    if ($(document).scrollTop() > bottom) {
      $header.addClass('tesseract-header-show');
    } else {
      $header.removeClass('tesseract-header-show');
      $navigation.removeClass('tesseract-navigation-show');
    }
  }, 25));
});