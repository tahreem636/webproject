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
