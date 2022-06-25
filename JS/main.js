// Custom Owl - Carousel

$(document).ready(function () {
  let owl = $(".owl-carousel").owlCarousel({
    autoplay: false,
    items: 1,
    dots: true,
    dotsData: true,
    loop: true,
    nav: false,
  });

  $(".owl-dot").click(function () {
    owl.trigger("to.owl.carousel", [$(this).index(), 1000]);
  });
});

 
