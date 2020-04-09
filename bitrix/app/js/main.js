$(function(){

    $('.photos__slider').slick({
        nextArrow: "<button type='button' class='slick-btn-photos slick-next'></button>",
        prevArrow: "<button type='button' class='slick-btn-photos slick-prev'></button>",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });

      $('.videos__items').slick({
        nextArrow: "<button type='button' class='slick-btn-videos slick-next'></button>",
        prevArrow: "<button type='button' class='slick-btn-videos slick-prev'></button>",
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });



      $('.sort-btn').on('click', function(){
        $(this).addClass('btn-active').siblings().removeClass('btn-active');
    })


  //   $('.another-collections-btn').on('click', function(){
  //     $(this).addClass('another-active').siblings().removeClass('another-active')
  // })
});