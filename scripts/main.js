function changeColourOfNavbar() {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
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
  let hamburgerItems = document.querySelector(".nav__hamburgerItem");
  let firstLine = document.querySelector(".nav__hamburgerItem--first");
  let secondLine = document.querySelector(".nav__hamburgerItem--second");
  let thirdLine = document.querySelector(".nav__hamburgerItem--third");
  let checkBox = document.querySelector(".nav__checkboxForHamburger");
  //rest of code
  checkBox.addEventListener("click", () => {
    console.log("is check box checked: " + checkBox.checked);
    if (checkBox.checked == true) {
      hamburger.style.alignItems = "center";
      hamburger.style.alignContent = "stretch";
      hamburger.style.position = "relative";
      hamburgerItems.style.position = "absolute";
      secondLine.style.display = "none";
      firstLine.style.transform = "rotate(45deg)";
      thirdLine.style.transform = "rotate(-45deg)";
    } else if (checkBox.checked == false) {
      hamburger.style.alignItems = "stretch";
      hamburger.style.alignContent = "space-between";
      hamburger.style.position = "static";
      hamburgerItems.style.position = "static";
      secondLine.style.display = "block";
      firstLine.style.transform = "rotate(180deg)";
      thirdLine.style.transform = "rotate(-180deg)";
      firstLine.style.transform = "none";
      thirdLine.style.transform = "none";
    }
  });
}

hamburger();
changeColourOfNavbar();
