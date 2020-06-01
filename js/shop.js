$(document).ready(function () {

  let butID = "#but1";
  let tabID = "#tab1";

  $(butID).css("border-bottom", "8px solid #03ad0e");
  $(butID).css("color", "#03ad0e");
  $(tabID).css("display", "flex");

})

function changeTab(input) {

  for (let i = 1; i <= 3; i++) {
    let butAll = "#but" + i;
    $(butAll).css("border-bottom", "none");
    $(butAll).css("color", "rgba(0, 0, 0, 0.54)");
  }

  for (let i = 1; i <= 3; i++) {
    let tabAll = "#tab" + i;
    $(tabAll).css("display", "none");
  }

  let butID = "#but" + input;
  let tabID = "#tab" + input;

  $(butID).css("border-bottom", "8px solid #03ad0e");
  $(butID).css("color", "#03ad0e");
  $(tabID).css("display", "flex");
}