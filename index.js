// Description: This file is used to initialize the lightbox library.
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
});

// carousel
var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();

var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
  console.log("next");
  scrollPosition = scrollPosition + cardWidth;
  $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 500);
});
