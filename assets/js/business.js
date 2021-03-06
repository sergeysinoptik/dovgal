$(function () {

  new WOW().init();
  $(".show-all").click(function () {
    $(".projects-item").fadeIn()
  })


  $('.hobby-slider .img').height($('.hobby-slider .img').width() / 1.49);

  if ($(window).width() >= 768) {

    $('.hobby-slider').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      centerMode: true,
      slidesToScroll: 1,
      centerPadding: '400px',
      prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-prev"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-next"></i></button>',
      responsive: [{
          breakpoint: 1600,
          settings: {
            centerPadding: '330px',
          }
        },
        {
          breakpoint: 1300,
          settings: {
            centerPadding: '220px',
          }
        },
        {
          breakpoint: 1024,
          settings: {
            centerPadding: '150px',
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: '120px',
          }
        }
      ]
    });

    $('.hobby-slider .img').height($('.hobby-slider .img').width() / 2.44);
  }

  $('.achievements-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    }]
  });

});


$(window).on('resize', function () {

  $('.hobby-slider .img').height($('.hobby-slider .img').width() / 1.49);

  if ($(window).width() >= 768) {

    $('.hobby-slider .img').height($('.hobby-slider .img').width() / 2.49);
  }

});