$(function () {

    new WOW().init();

    var swiper = new Swiper(".gallery-2", {
        effect: "cards",
        grabCursor: true,
    });

    $(".date li a").on('click', function () {
        $('.date li a').parent().removeClass('active')
        $(this).parent().addClass('active')
    })

    //Cкролл к блоку
    $(".go-to").on('click', function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});

$.fn.inView = function () {
    let win = $(window);
    obj = $(this);
    let scrollPosition = win.scrollTop();
    let visibleArea = win.scrollTop() + win.height();
    let objEndPos = (obj.offset().top + obj.outerHeight());
    return (visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
};


$(window).scroll(function () {
    if ($("#item-1").inView()) {
        $('.date li').removeClass('active')
        $('.item-1').addClass('active')
    } else if ($("#item-2").inView()) {
        $('.date li').removeClass('active')
        $('.item-2').addClass('active')
    } else if ($("#item-3").inView()) {
        $('.date li').removeClass('active')
        $('.item-3').addClass('active')
    } else if ($("#item-4").inView()) {
        $('.date li').removeClass('active')
        $('.item-4').addClass('active')
    } else if ($("#item-5").inView()) {
        $('.date li').removeClass('active')
        $('.item-5').addClass('active')
    } else {
        $('.date li').removeClass('active')
    }
});


$(window).on('resize', function () {



});