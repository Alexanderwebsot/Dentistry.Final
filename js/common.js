$(document).ready(function () {
  let modal_counter = 0;
  $(".phone").mask("+7 (999) 999-9999");
  $('.modal-window__exit').on('click', function() {
    let modal = $('.dark-window');
    $(modal).addClass('dark-window__close');
    let modal_2 = $('.modal-window');
    $(modal_2).addClass('dark-window__close');
  })
  $('.modal-window__call').on('click', function() {
    let modal = $('.dark-window');
    $(modal).removeClass('dark-window__close');
    let modal_2 = $('.modav-window-zapis');
    $(modal_2).removeClass('dark-window__close');
    return false;
  })
  $('.services-block').on('mouseover', function() {
    let block = $(this).children('.services-block-opened');
    $(block).addClass('services-block-opened__active');
  })
  $('.dark-window').on('click', function() {
    let modal = $('.modal-window');
    $(modal).addClass('dark-window__close');
    let modal_2 = $('.dark-window');
    $(modal_2).addClass('dark-window__close');
  })
  $('.services-block').on('mouseout', function() {
    let block = $(this).children('.services-block-opened');
    $(block).removeClass('services-block-opened__active');
  })
  $('.reviews-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: $('.about-arrows__left_r'),
    nextArrow: $('.about-arrows__right_r'),
    autoplay: true,
    autoplaySpeed: 30000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.certificates-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: $('.about-arrows__left_l'),
    nextArrow: $('.about-arrows__right_l'),
    autoplay: true,
    autoplaySpeed: 30000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.about-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: $('.about-arrows__left'),
    nextArrow: $('.about-arrows__right'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: $('.about-arrows__left_t'),
    nextArrow: $('.about-arrows__right_t'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.nav-phone__link').on('click', function() {
    let modal = $('.dark-window');
    $(modal).removeClass('dark-window__close');
    let modal_2 = $('.modal-window-phone');
    $(modal_2).removeClass('dark-window__close');
    return false;
  })
  $('.questions-block').on('click', function() {
    if ($(this).hasClass('questions-block__active')) {
      $(this).removeClass('questions-block__active');
    }
    else{
      $(this).addClass('questions-block__active');
    }
  })
  $(document).mouseleave(function(e){
    if (e.clientY < 10) {
      if (modal_counter == 0) {
        let modal = $('.dark-window');
        $(modal).removeClass('dark-window__close');
        let modal_2 = $('.modav-window-zapis');
        $(modal_2).removeClass('dark-window__close');
      }
      modal_counter = 1;
    }
});
});
