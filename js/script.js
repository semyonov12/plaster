$(document).ready(function(){
  $('.portfolio__slider').slick({
      slidesToShow: 2,
      responsive: [
    {
      breakpoint: 1206,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  $('.reviews__slider').slick({
      slidesToShow: 4,
      responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
      }
    },
    {
       breakpoint: 700,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });




});