// const body = $("body");
const body = document.body;
$(document).ready(function () {
  $(".button").on("click", function () {
    $(".navbar").toggleClass("active");
    $(".header").toggleClass("activeHeader");
    const buttonName = $(".navbar .title")[0];
    if ($(".navbar").hasClass("active")) {
      buttonName.innerHTML = "Close";
      body.addClass("disableScroll");
    } else {
      buttonName.innerHTML = "Menu";
      body.removeClass("disableScroll");
    }
  });
});
let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.screenY - 125) + "px; left:" + e.screenX + "px;"
  );
});
function hoverElement() {
  var cursor = $(".cursor");
  var logo = $(".logo");
  var image = $(".image");
  var swipe = $(".cursor .swipe");
  var email = $(".email");
  var nav = $(".button");
  //logo
  logo.mouseover(function () {
    cursor.addClass("hover-logo");
  });
  logo.mouseout(function () {
    cursor.removeClass("hover-logo");
  });
  //image
  image.mouseover(function () {
    cursor.addClass("hover-info");
    swipe.addClass("active-swipe");
  });
  image.mouseout(function () {
    cursor.removeClass("hover-info");
    swipe.removeClass("active-swipe");
  });
  //email
  email.mouseover(function () {
    cursor.addClass("hover-email");
  });
  email.mouseout(function () {
    cursor.removeClass("hover-email");
  });
  //nav
  nav.mouseover(function () {
    cursor.addClass("hover-menu");
  });
  nav.mouseout(function () {
    cursor.removeClass("hover-menu");
  });
}
hoverElement();
var activeInfo = $(".info .image");
activeInfo.on("click", function () {
  $(".information").addClass("activeInfo");
  body.addClass("disableScroll");
});
//escape
$(document).keyup(function (e) {
  if (e.key === "Escape") {
    $(".information").removeClass("activeInfo");
    body.removeClass("disableScroll");
  }
});

// setTimeout(() => {
//   // Wrap every letter in a span
//   var textWrapper = document.querySelector(".hello .letters");
//   textWrapper.innerHTML = textWrapper.textContent.replace(
//     /\S/g,
//     "<span class='letter'>$&</span>"
//   );
//   anime.timeline({ loop: false }).add({
//     targets: ".hello .letter",
//     translateY: ["1.2em", 0],
//     translateZ: 0,
//     duration: 2000,
//     delay: (el, i) => 50 * i,
//   });
// }, 500);
// setTimeout(() => {
//   // Wrap every letter in a span
//   var textWrapper = document.querySelector(".mainTitle .letters");
//   textWrapper.innerHTML = textWrapper.textContent.replace(
//     /\S/g,
//     "<span class='letter'>$&</span>"
//   );
//   anime.timeline({ loop: false }).add({
//     targets: ".mainTitle .letter",
//     translateY: ["1.2em", 0],
//     translateZ: 0,
//     duration: 2000,
//     delay: (el, i) => 50 * i,
//   });
// }, 500);
// setTimeout(() => {
//   // Wrap every letter in a span
//   var textWrapper = document.querySelector(".role .letters");
//   textWrapper.innerHTML = textWrapper.textContent.replace(
//     /\S/g,
//     "<span class='letter'>$&</span>"
//   );
//   anime.timeline({ loop: false }).add({
//     targets: ".role .letter",
//     translateY: ["1.2em", 0],
//     translateZ: 0,
//     duration: 800,
//     delay: (el, i) => 50 * i,
//   });
// }, 500);
