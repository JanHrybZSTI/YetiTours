function hamburger() {
  //variables
  let checkBox = document.querySelector(".nav__hamburger-checkbox");
  let hamburgerX = document.getElementById("hamburgerX");
  let hamburgerDefault = document.getElementById("hamburgerDefault");

  //setting both stylesheets to disabled
  hamburgerX.disabled = true;
  hamburgerDefault.disabled = true;

  //rest of code
  checkBox.addEventListener("change", () => {
    //console.log("is check box checked: " + checkBox.checked);
    if (checkBox.checked == true) {
      hamburgerX.disabled = false;
      hamburgerDefault.disabled = true;
    } else if (checkBox.checked == false) {
      hamburgerX.disabled = true;
      hamburgerDefault.disabled = false;
    }
  });
}

function resizeHamburger() {
  let checkBox = document.querySelector(".nav__hamburger-checkbox");
  let hamburgerX = document.getElementById("hamburgerX");
  let hamburgerDefault = document.getElementById("hamburgerDefault");
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1107) {
      hamburgerX.disabled = true;
      hamburgerDefault.disabled = true;
      checkBox.checked = false;
    }
  });
}
resizeHamburger();
hamburger();

/*
window.addEventListener("resize", function () {
  let menu = document.querySelector(".nav__menu");
  let logo = document.querySelector(".nav__logo-box");
  console.log("menu width: " + menu.offsetWidth);
  console.log("logo width: " + logo.offsetWidth);
});*/
/*
function changeColourOfNavbar() {
  window.addEventListener("scroll", () => {
    let nav = document.querySelector(".nav");
    let currentHeight = window.scrollY;
    console.log(currentHeight);
    if (currentHeight > 1) {
      //window.scrollTo(0, 600);
      //nav.style.backgroundColor = "white";
      //nav.style.backdropFilter = "blur(10px)";
    } else {
      //nav.style.backgroundColor = "transparent";
      //nav.style.backdropFilter = "blur(0px)";
    }
  });
}
changeColourOfNavbar();
*/

//rest of unnecessary code :)

/*
let offer = document.querySelectorAll(".main__offer");
let offerDesc = document.querySelectorAll(".main__offer-description");
for (let i = 0; i < offer.length; i++) {
  offer[i].addEventListener("mouseover", () => {
    offerDesc[i].style.display = "block";
  });
  offer[i].addEventListener("mouseout", () => {
    offerDesc[i].style.display = "none";
  });
}
*/

//function to make nav transparent at the to of 0
/*
function changeColourOfNavbar() {
  window.addEventListener("scroll", () => {
    let nav = document.querySelector(".nav");
    let currentHeight = window.scrollY;
    if (currentHeight > 0) {
      nav.style.backgroundColor = "white";
      //nav.style.backdropFilter = "blur(10px)";
    } else {
      nav.style.backgroundColor = "transparent";
      //nav.style.backdropFilter = "blur(0px)";
    }
  });
  changeColourOfNavbar();
}*/
