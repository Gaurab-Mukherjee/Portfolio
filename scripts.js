// Toggle mobile menu visibility
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

// Show or hide scroll-to-top button
window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Smooth scroll to top
document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Computer Science Engineer",
      "Full Stack Developer",
      "Lifelong Learner",
      "Android Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });



//   // owl carousel script
//   $(".carousel").owlCarousel({
//     margin: 20,
//     loop: true,
//     autoplayTimeOut: 2000,
//     autoplayHoverPause: true,
//     responsive: {
//       0: {
//         items: 1,
//         nav: false
//       },
//       600: {
//         items: 2,
//         nav: false
//       },
//       1000: {
//         items: 3,
//         nav: false
//       }
//     }
//   });
