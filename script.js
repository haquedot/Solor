$(document).ready(function(){
    $('.services-slider').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      responsive: {
        0: {
          items: 1.2
        },
        600: {
          items: 2.5
        },
        1000: {
          items: 3.5
        }
      }
    });
  });
  

  $(document).ready(function() {
    $(".our-why-choose").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});