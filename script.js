$(document).ready(function () {
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


$(document).ready(function () {
  $(".our-why-choose").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
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

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  let hasAnimated = false;

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".stat-counter",
    start: "top 80%",
    onEnter: () => {
      if (!hasAnimated) {
        counters.forEach(counter => {
          const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;

            const increment = target / 100;

            if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 30);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
        });
        hasAnimated = true;
      }
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

const words = document.querySelectorAll('#animateText .word');

gsap.from(words, {
  opacity: 0,
  y: 20,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: '.section-title-row',
    start: 'top 80%',
    toggleActions: 'play none none none'
  }
});

gsap.from(".why-choose-item", {
  opacity: 0,
  scale: 0.8, // Starts from 80% of its original size
  duration: 1,
  ease: "power2.out",
  stagger: 0.2, // Delay between each card's animation
  scrollTrigger: {
      trigger: ".our-why-choose",
      start: "top 80%", // When the cards section is in the viewport
      toggleActions: "play none none none"
  }
});