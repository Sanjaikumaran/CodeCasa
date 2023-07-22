function cngclr() {
  var top1 = document.getElementsByClassName("top")[0];

  // trigger this function every time the user scrolls
  window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll > 40) {
      top1.style.backgroundColor = "black";
      top1.style.transitionDuration = "0.5s";
    } else {
      top1.style.backgroundColor = null;
    }
  };
}
function clock() {
  var date = new Date();

  document.getElementsByClassName("hour")[0].style.transform =
    "rotate(" +
    (30 * date.getHours() + date.getMinutes() * (360 / 720)) +
    "deg)";
  document.getElementsByClassName("minute")[0].style.transform =
    "rotate(" +
    (6 * date.getMinutes() + date.getSeconds() * (360 / 720)) +
    "deg)";
  document.getElementsByClassName("second")[0].style.transform =
    "rotate(" + 6 * date.getSeconds() + "deg)";
}
var f, c, box, option;
function convert(unit) {
  box = document.getElementsByName("box");

  k = box[0].value + 273.15;
  if (unit == "box1") {
    box[1].value = (9 / 5) * parseFloat(box[0].value) + 32;
    box[2].value = parseFloat(box[0].value) + 273.15;
  } else if (unit == "box2") {
    box[0].value = (parseFloat(box[1].value) - 32) / 1.8;
    box[2].value = (parseFloat(box[1].value) - 32) / 1.8 + 273.15;
  } else {
    box[0].value = parseFloat(box[2].value) - 273.15;
    box[1].value = (parseFloat(box[2].value) - 273.15) * 1.8 + 32;
  }
}
