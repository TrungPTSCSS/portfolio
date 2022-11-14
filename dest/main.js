const body = $("body");
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
// let cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", (e) => {
//   cursor.setAttribute(
//     "style",
//     "top: " + (e.screenY - 125) + "px; left:" + e.screenX + "px;"
//   );
// });
// function hoverElement() {
//   var cursor = $(".cursor");
//   var logo = $(".logo");
//   var image = $(".image");
//   var swipe = $(".cursor .swipe");
//   var email = $(".email");
//   var nav = $(".button");
//   //logo
//   logo.mouseover(function () {
//     cursor.addClass("hover-logo");
//   });
//   logo.mouseout(function () {
//     cursor.removeClass("hover-logo");
//   });
//   //image
//   image.mouseover(function () {
//     cursor.addClass("hover-info");
//     swipe.addClass("active-swipe");
//   });
//   image.mouseout(function () {
//     cursor.removeClass("hover-info");
//     swipe.removeClass("active-swipe");
//   });
//   //email
//   email.mouseover(function () {
//     cursor.addClass("hover-email");
//   });
//   email.mouseout(function () {
//     cursor.removeClass("hover-email");
//   });
//   //nav
//   nav.mouseover(function () {
//     cursor.addClass("hover-menu");
//   });
//   nav.mouseout(function () {
//     cursor.removeClass("hover-menu");
//   });
// }
// hoverElement();
var activeInfo = $(".info .image");
activeInfo.on("click", function () {
  $(".profile").addClass("activeInfo");
  body.addClass("disableScroll");
});
//escape
$(document).keyup(function (e) {
  if (e.key === "Escape") {
    $(".profile").removeClass("activeInfo");
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

//cusor
let cursor = document.querySelector(".cursor");
let more = document.querySelector(".cursor .more");
let cursorScale = document.querySelectorAll(".cursor-scale");
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX + 10;
  mouseY = e.clientY + 10;
});

cursorScale.forEach((link) => {
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
    if (link.classList.contains("small")) {
      cursor.classList.remove("grow");
      cursor.classList.add("grow-small");
    }
    if (link.classList.contains("image")) {
      more.classList.add("activeMore");
    }
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
    cursor.classList.remove("grow-small");
    more.classList.remove("activeMore");
  });
});
