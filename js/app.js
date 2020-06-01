var slideIndex = 1;

$(document).ready(function () {
  goToSlide(slideIndex);
});

function openMobileNav() {
  $('.mobile-nav-content').toggle(300);
}

function incrementSlide(n) {
  goToSlide(slideIndex += n);
}

function currentSlide(n) {
  goToSlide(slideIndex = n);
}

function goToSlide(n) {
  let i;
  let slides = $(".slides");
  let dots = $(".dot");

  if (n > slides.length)
    slideIndex = 1

  if (n < 1)
    slideIndex = slides.length

  $(slides).css("display", "none");
  $(dots).removeClass("active");

  $(slides[slideIndex - 1]).css("display", "block");
  $(dots[slideIndex - 1]).addClass("active");
}
