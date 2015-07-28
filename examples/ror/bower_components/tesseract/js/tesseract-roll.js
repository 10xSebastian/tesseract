jQuery(function(){
  var $outside = $('.tesseract-outside');
  var $inside = $('.tesseract-inside');
  $(document).on('scroll', _.throttle(function(){
    var ratio = $(window).scrollTop()/$(window).height();
    var outsideRotateX = 220 + (180*ratio);
    var insideRotateX = 220 - (180*ratio);
    var valueOutside = 'translateZ(-100px) rotateX(-'+outsideRotateX+'deg) rotateY(45deg)';
    var valueInside = 'translateZ(-150px) scale(0.5) rotateX(-'+insideRotateX+'deg) rotateY(45deg)';
    $outside.css({'transform': valueOutside});
    $inside.css({'transform': valueInside});
  }, 25));
});