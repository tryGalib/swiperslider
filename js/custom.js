const swiper = new Swiper('.sw-container', {

  effect: "cube",
        grabCursor: true,
        cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
        },
        pagination: {
          el: ".swiper-pagination",
        },


        


  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
    clickable: true,
  },


  // Autoplay

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
