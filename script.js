/* Nav bar JS */

$(window).on('scroll', function(){
  if ($(window).scrollTop()){
    $('nav').addClass('black');
  }
  else {
    $('nav').removeClass('black');
  }
})

/* FADE IN CONTENT JS */

/* These selectors tell JS to focus on a specific class */
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,           /* function will fade in when fully visible */
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {         /* ! means 'false'.  */
            return                        /* if not intersecting, return. */
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);  /* Tells the 'appearOnScroll' observer to stop once its completed */
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});


/* Slick Carousel JS */

$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),   /* this manually uses the Font Awesome buttons from HTML as the slider buttons */
  prevArrow: $('.next'),

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});
