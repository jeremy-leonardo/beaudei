var slideIndex = 1;

$(document).ready(function () {
  changeSlide(slideIndex);
});

function plusSlides(n) {
  changeSlide(slideIndex += n);
}

function currentSlide(n) {
  changeSlide(slideIndex = n);
}

function changeSlide(n) {
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
