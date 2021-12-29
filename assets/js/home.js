$(function(){
    
    $('.home-slider').slick({
        dots: true,
        arrows: false,
    });

    if($(window).width() >= 1024){
        $('.home-slider').slick('unslick');
    }

    $('.nav-item').on('click', function(){
        var home = $(this).data('home');
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        $('.home-nav').removeClass('business');
        $('.home-nav').removeClass('soul');
        $('.home-nav').removeClass('body');
        $('.home-nav').removeClass('music');
        $('.home-nav').removeClass('philanthropy');
        $('.home-nav').addClass(home);
        $('.home-item').removeClass('active');
        $('.' + home).addClass('active');
    });

});


$(window).on('resize', function(){

    if($(window).width() <= 1023){
        $('.home-slider').slick({
            dots: true,
            arrows: false,
        });
        location.reload();
    }

    if($(window).width() == 1024){
        $('.home-slider').slick('unslick');
    }

});

// Trying to replicate the effect here - https://tympanus.net/Development/MorphingBackgroundShapes/

$(".wrapper").mousemove(function(e) {
    var x = e.pageX - $(this).offset().left - $(this).width() / 2;
    var y = e.pageY - $(this).offset().top - $(this).height() / 2;
    
    $("*[data-mouse-parallax]").each(function() {
      var factor = parseFloat($(this).data("mouse-parallax"));
      x = -x * factor;
      y = -y * factor;
  
      $(this).css({ transform: "translate3d( " + x + "px, " + y + "px, 0 )" });
    });
});
  
    $(".wrapper").mouseleave(function(e) {
      var target = $(e.target);
  
      if( !target.is(".layer")) {
        $("*[data-mouse-parallax]").each(function() {
            $(this).css({ transform: "translate3d( 0px, 0px, 0 )" });
        });
        e.stopPropagation();
     }
});


