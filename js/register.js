var isAgree = false;

$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
  });
});

function checkForm() {
  let isNameValid = validateFullName();
  let isGenderValid = validateGender();
  let isAdrrValid = validateAddress();
  let isEmailValid = validateEmail();
  let isPassValid = validatePassword();
  let isSkinValid = validateSkin();
  let isAgreeValid = validateAgree();

  if (!isNameValid) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#fullName").offset().top - 100
    }, 300);
    return false;
  } else if (!isGenderValid) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#male").offset().top - 100
    }, 300);
  } else if (!isAdrrValid) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#address").offset().top - 100
    }, 300);
  } else if (!isEmailValid) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#email").offset().top - 100
    }, 300);
  } else if (!isPassValid) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#password").offset().top - 100
    }, 300);
  } else if (!isSkinValid) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#skinType").offset().top - 100
    }, 300);
  } else if (!isAgreeValid) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#agreement").offset().top - 100
    }, 300);
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

function checkAddressStart(input) {
  let addressStr = input;
  let subStr1 = "jl.";
  let subStr2 = "jalan";
  let n1 = addressStr.toUpperCase().indexOf(subStr1.toUpperCase());
  let n2 = addressStr.toUpperCase().indexOf(subStr2.toUpperCase());
  if (n1 == 0 || n2 == 0) {
    formValidFeedback("address");
    return true;
  } else {
    formInvalidFeedback("address", "Address has to start with 'Jl.' or 'Jalan' ");
    return false;
  }

}

function validateAddress() {

  var address = $('#address').val();
  if (address == '' || address == null || address.length == 0) {
    formInvalidFeedback("address", "Address Cannot be empty");
    return false;
  }
  else if (!checkAddressStart(address)) {
    return false;
  }
  else if (address.length < 8) {
    formInvalidFeedback("address", "Address Has to be longer than 8 Character");
    return false;
  }
  else {
    return true;
  }

}

function checkEMail(inp) {

  let atIndex = inp.indexOf("@");
  let domainStr = '';

  if (atIndex > 0 && atIndex < inp.length - 1) {
    domainStr = inp.substring(atIndex + 1, inp.length);
  }

  if (inp[0] == '@') {
    formInvalidFeedback("email", "Email must not starts with '@'. Example: user@gmail.com ");
    return false;
  }
  else if (domainStr.includes("@")) {
    formInvalidFeedback("email", "Email must not have more than one '@'. Example: user@gmail.com ");
    return false;
  }
  else if (atIndex == inp.length - 1) {
    formInvalidFeedback("email", "Email must not ends with '@'. Example: user@gmail.com ");
    return false;
  }
  else if (inp.includes(" ")) {
    formInvalidFeedback("email", "Email not contain any space. Example: user@gmail.com");
    return false;
  }
  else if (!domainStr.includes(".")) {
    formInvalidFeedback("email", "Email must use email format. Example: user@gmail.com");
    return false;
  }
  else {
    formValidFeedback("email");
    return true;
  }

}

function validateEmail() {

  var email = $("#email").val();
  if (email == '' || email == null || email.length == 0) {
    formInvalidFeedback("email", "Email cannot be empty");
    return false;
  }
  else if (!checkEMail(email)) {
    return false;
  }
  else {
    formValidFeedback("email");
    return true;
  }

}

function validatePassword() {

  var pass = $("#password").val();

  if (pass == '' || pass == null || pass.length == 0) {
    formInvalidFeedback("password", "Password cannot be empty");
    return false;
  }
  else if (pass.length < 8) {
    formInvalidFeedback("password", "Password must be longer than 8 characters");
    return false;
  }
  else {
    formValidFeedback("password");
    return true;
  }

}

function validateSkin() {

  var skin = $("#skinType").val();

  if (skin == null || skin == '') {

    formInvalidFeedback("skin", "You must choose your skin type");
    return false;
  }
  else {
    formValidFeedback("skin");
    return true;
  }

}

function validateGender() {
  let gender = $('input[name="gender"]:checked').val();
  if (gender != 'male' && gender != 'female') {
    formInvalidFeedback("gender", "You must select your gender");
    return false;
  }
  else {
    formValidFeedback("gender");
    return true;
  }
}

function agreeChange() {
  isAgree = !isAgree;
  validateAgree();
}

function validateAgree() {
  if (!isAgree) {
    formInvalidFeedback("agree", "You must agree to our Terms and Conditions to use our services");
    return false;
  }
  else {
    formValidFeedback("agree");
    return true;
  }
}

function alphabetCheck(str) {
  // THIS IS BECAUSE REGEX IS NOT ALLOWED
  allowedChars = 'abcdefghijklmnopqrstuvwxyz '
  str = str.toLocaleLowerCase();
  for (let index = 0; index < str.length; index++) {
    if (allowedChars.search(str[index]) == -1) {
      return false;
    }
  }
  return true;
}

function submitCheck() {

  if (checkForm()) {
    alert('Registration success!');
    $("#submitErrorMsg").css("display", "none");

  }
  else {
    $("#submitErrorMsg").css("color", "red");
    $("#submitErrorMsg").html('Please check your input again');
  }
}