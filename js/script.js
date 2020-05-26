var slideIndex = 1;

$(document).ready(function () {
  changeSlide(slideIndex);
  $("form").submit(function (e) {
    e.preventDefault();
  });
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

function checkForm() {
  let isNameValid = validateFullName();
  if (!isNameValid) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#fullName").offset().top - 100
    }, 300);
    return false;
  }
  else {
    return true;
  }
}

function formInvalidFeedback(inputIdName, errorMsg) {
  if (inputIdName[0] != '#')
    inputIdName = '#' + inputIdName;
  let inputIdMsg = inputIdName + "Msg";
  $(inputIdMsg).css("color", "red");
  $(inputIdMsg).html(errorMsg);
}

function formValidFeedback(inputIdName) {
  if (inputIdName[0] != '#')
    inputIdName = '#' + inputIdName;
  let inputIdMsg = inputIdName + "Msg";
  $(inputIdMsg).css("color", "gray");
  $(inputIdMsg).html('');
}

function validateFullName() {
  let fullName = $('#fullName').val();
  if (fullName == '' || fullName == null || fullName.length == 0) {
    formInvalidFeedback("fullName", "Name must not be empty");
    return false;
  } else if (fullName.length < 3) {
    formInvalidFeedback("fullName", "Name must consists of 3 characters minimum");
    return false;
  } else if (!alphabetCheck(fullName)) {
    formInvalidFeedback("fullName", "Name must only contains alphabets");
    return false;
  } else {
    formValidFeedback("fullName");
    return true;
  }
}

function alphabetCheck(str) {
  // THIS IS BECAUSE REGEX IS NOT ALLOWED
  allowedChars = 'abcdefghijklmnopqrstuvwxyz'
  str = str.toLocaleLowerCase();
  for (let index = 0; index < str.length; index++) {
    console.log(allowedChars.search(str[index]));
    if (allowedChars.search(str[index]) == -1) {
      return false;
    }
  }
  return true;
}

function submitCheck() {
  if (checkForm())
    alert('Registration success!');
  else {
    $("#submitErrorMsg").css("color", "red");
    $("#submitErrorMsg").html('Please check your input again');
  }
}
