var img1 = document.getElementById("sliImgID1");
var img2 = document.getElementById("sliImgID2");
var slide = document.getElementById("wrp1");
var count = 0;
start();
startBottomSlider();

var form = document.forms["form"];
form.onsubmit = function (e) {
    e.preventDefault();
  var name = form.name,
    subj = form.subj,
    tel = form.tel,
    mail = form.email;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "x@gmail.com",
        Password: "x",
        To: "xx@gmail.com",
        From: "x@gmail.com",
        Subject: "ŞirketAdı Bize Ulaşın",
        Body: `Ad Soyad: ${name.value}. Telefon: ${tel.value}. Mail: ${mail.value}. Konu: ${subj.value}`,
    }
    );
};

document.addEventListener("scroll", scrollPageDown);
function scrollPageDown() {
  var elementOffset = window.pageYOffset;
  if (elementOffset > 110) {
    document.getElementById("header").style.backgroundColor = "#fff";
  } else {
    document.getElementById("header").style.backgroundColor =
      "rgba(255, 255, 255, 0.5)";
  }
}

var menu = document.getElementById("menu");
var openmenu = document.getElementById("openmenu");
var closemenu = document.getElementById("closemenu");

openmenu.addEventListener("click", openMenuFunc);
closemenu.addEventListener("click", closeMenuFunc);
function openMenuFunc() {
  menu.style.opacity = 0;
  menu.style.display = "block";
  openmenu.style.display = "none";
  closemenu.style.display = "block";
  window.setTimeout(function () {
    menu.style.opacity = 1;
    menu.style.transform = "scale(1)";
  }, 0);
}
function closeMenuFunc() {
  closemenu.style.display = "none";
  openmenu.style.display = "block";
  menu.style.opacity = 0;
  menu.style.transform = "scale(0)";
  window.setTimeout(function () {
    menu.style.display = "none";
  }, 400);
}

window.addEventListener("resize", reportWidth);
function reportWidth() {
  width = document.documentElement.clientWidth;
}

var tProps = ["ease", "linear", "ease-in", "ease-out", "ease-in-out"];

function moveup() {
  var tPropsNumber = Math.floor(Math.random() * 5);
  img1.style.transition =
    "visibility 1s " +
    tProps[tPropsNumber] +
    ", opacity 1s " +
    tProps[tPropsNumber];
  img2.style.transition =
    "visibility 1s " +
    tProps[tPropsNumber] +
    ", opacity 1s " +
    tProps[tPropsNumber];
  if (count == 0) {
    count++;
    img1.style.visibility = "visible";
    img1.style.opacity = "1";
    img2.style.visibility = "hidden";
    img2.style.opacity = "0";
  }
  if (img1.style.visibility == "visible") {
    img1.style.visibility = "hidden";
    img1.style.opacity = "0";
    img2.style.visibility = "visible";
    img2.style.opacity = "1";
  } else if (img2.style.visibility == "visible") {
    img2.style.visibility = "hidden";
    img2.style.opacity = "0";
    img1.style.visibility = "visible";
    img1.style.opacity = "1";
  }
}
function start() {
  time = setInterval(moveup, 15000);
}
function stop() {
  clearInterval(time);
}

var slider = document.getElementById("cttop");
var sliderItems = document.getElementById("wrp2");
var images = document.getElementsByClassName("sliImg2");
var count2 = 0;

function bottomslider() {
  count2++;
  if (count2 >= images.length) {
    count2 = 0;
  }

  sliderItems.style.transition = "transform 1s ease";
  sliderItems.style.transform = "translateX(" + -count2 * 185 + "px)";
}

function startBottomSlider() {
  time2 = setInterval(bottomslider, 2000);
}