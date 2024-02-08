// Mixitup

//var config = document.querySelector('.wrapper');
//var mixer = mixitup(config);

var mixer = mixitup('.container');




//Swiper(Instructor)

function swipeIns() {
      var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      });
}
swipeIns();




//Swiper(review)

function swiperReview() {
      var swiper = new Swiper(".review", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });
}
swiperReview();























// const text = new SplitType("#target1")

// gsap.from("#target1",{
// 	y:100,
// 	stagger:0.05,
// 	duration:0.3
// })