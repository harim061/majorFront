var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  spaceBetween: 10,
  loop: true,
  freeMode: true,
  loopAdditionalSlides: 5,
  speed: 500,
  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      // when window width is >= 640px
      640: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          freeMode: false
      }
  }
})

$(function() {
    $('a.thumbTile').on("click",function(e) {
        e.preventDefault();
    });
});