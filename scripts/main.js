function changeColourOfNavbar() {
  window.addEventListener("scroll", () => {
    let nav = document.querySelector(".nav");
    let currentHeight = window.scrollY;
    if (currentHeight > 0) {
      nav.style.backgroundColor = "white";
      /*nav.style.backdropFilter = "blur(10px)";*/
    } else {
      nav.style.backgroundColor = "transparent";
      /*nav.style.backdropFilter = "blur(0px)";*/
    }
  });
}

function hamburger() {
  //variables
  let hamburger = document.querySelector(".nav__hamburger");
  let hamburgerItems = document.querySelector(".nav__hamburger-item");
  let firstLine = document.querySelector(".nav__hamburger-item--first");
  let secondLine = document.querySelector(".nav__hamburger-item--second");
  let thirdLine = document.querySelector(".nav__hamburger-item--third");
  let checkBox = document.querySelector(".nav__hamburger-checkbox");
  //rest of code
  checkBox.addEventListener("click", () => {
    console.log("is check box checked: " + checkBox.checked);
    if (checkBox.checked == true) {
      /*remove*/ /*git*/
      hamburger.classList.remove("nav__hamburger-default");
      hamburgerItems.classList.remove("nav__hamburger-item-default");
      firstLine.classList.remove("nav__hamburger-item--first-default");
      secondLine.classList.remove("nav__hamburger-item--second-default");
      thirdLine.classList.remove("nav__hamburger-item--third-default");
      /*add*/
      hamburger.classList.add("nav__hamburger-X");
      hamburgerItems.classList.add("nav__hamburger-item-X");
      firstLine.classList.add("nav__hamburger-item--first-X");
      secondLine.classList.add("nav__hamburger-item--second-X");
      thirdLine.classList.add("nav__hamburger-item--third-X");
    } else if (checkBox.checked == false) {
      /*remove*/
      hamburger.classList.remove("nav__hamburger-X");
      hamburgerItems.classList.remove("nav__hamburger-item-X");
      firstLine.classList.remove("nav__hamburger-item--first-X");
      secondLine.classList.remove("nav__hamburger-item--second-X");
      thirdLine.classList.remove("nav__hamburger-item--third-X");
      /*add*/
      hamburger.classList.add("nav__hamburger-default");
      hamburgerItems.classList.add("nav__hamburger-item-default");
      firstLine.classList.add("nav__hamburger-item--first-default");
      secondLine.classList.add("nav__hamburger-item--second-default");
      thirdLine.classList.add("nav__hamburger-item--third-default");
    }
  });
}

hamburger();
changeColourOfNavbar();
