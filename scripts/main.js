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
changeColourOfNavbar();
