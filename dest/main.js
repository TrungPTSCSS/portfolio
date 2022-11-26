AOS.init();
Splitting();
const body = $("body");
const main = $(".container");
$(document).ready(function () {
  //open or close menu
  $(".navbar .button").on("click", function () {
    $(".navbar").toggleClass("active");
    $(".header").toggleClass("activeHeader");
    const buttonName = $(".navbar .title")[0];
    if ($(".navbar").hasClass("active")) {
      buttonName.innerHTML = "Close";
      main.addClass("disableScroll");
    } else {
      buttonName.innerHTML = "Menu";
      main.removeClass("disableScroll");
    }
  });
  //open information
  var activeInfo = $(".introduce .introduce_title-about");
  activeInfo.on("click", function () {
    $(".profile").addClass("activeInfo");
    body.addClass("disableScroll");
  });
  //escape to close information
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $(".profile").removeClass("activeInfo");
      body.removeClass("disableScroll");
    }
  });
  //click button to close information
  $(".history .button").on("click", function () {
    $(".profile").removeClass("activeInfo");
    body.removeClass("disableScroll");
  });

  window.addEventListener("scroll", function () {
    var scrollHeight = document.documentElement.scrollTop;
    if (scrollHeight > window.innerHeight * 7) {
      //add class animation signature
      let sign = document.querySelector(".signature svg path");
      sign.classList.add("animation-text");
    }
  });
  //cusor Gsap
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
      if (link.classList.contains("showMore")) {
        more.classList.add("activeMore");
      }
    });

    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
      cursor.classList.remove("grow-small");
      more.classList.remove("activeMore");
    });
  });
});
