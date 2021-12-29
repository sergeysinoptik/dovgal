$(function () {
    $(".open_menu").click(function () {
        $('.mobile-menu').fadeToggle(100);
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $('body').addClass('showing-modal')
        } else {
            $('body').removeClass('showing-modal')
        }
    });
    $(".mobile-menu nav li").click(function () {
        $('.mobile-menu nav li').removeClass("active-link");
        $(this).addClass("active-link");
    })
    //Попапы
    jQuery(function (a) {
        a(document).mouseup(function (b) {
            var c = a(".modal>.inner");
            c.is(b.target) || 0 !== c.has(b.target).length || (
                a(".modal").fadeOut("slow"),
                a("body").removeClass("showing-modal"))
        })
    });

    $('.close').on('click', function () {
        $(".modal").fadeOut("slow");
        $('body').removeClass('showing-modal');
        $(".mobile-popup").removeClass("active");
    });
    $('.button-close').on('click', function () {
        $(".modal").fadeOut("slow");
        $('body').removeClass('showing-modal');
        $(".mobile-popup").removeClass("active");
    });
    $('.contact-link').on('click', function () {
        $(".modal").fadeOut("slow");
        $(".modal-form").fadeIn("slow");
        $('body').addClass('showing-modal');
    });
})