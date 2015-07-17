jQuery(function(){
  var $header = $('.tesseract-header');
  var $tesseract = $('.tesseract-outside');
  $(document).on('scroll', _.throttle(function(){
    var bottom = $tesseract.offset().top + $tesseract.height();
    if ($(document).scrollTop() > bottom) {
      $header.addClass('tesseract-header-show');
    } else {
      $header.removeClass('tesseract-header-show');
    }
  }, 25));
});