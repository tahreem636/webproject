// Hide navbar on scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
  let navbar = document.querySelector(".navbar");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Downscroll
    navbar.style.top = "-80px"; // Adjust the value to hide the navbar
  } else {
    // Upscroll
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
// JavaScript for adding visible class when in view
document.addEventListener('DOMContentLoaded', function() {
  const aboutText = document.querySelector('.about-text');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutText.classList.add('visible'); // Add class to make text visible
        observer.unobserve(entry.target); // Stop observing after it becomes visible
      }
    });
  });

  observer.observe(aboutText); // Observe the text element
});
