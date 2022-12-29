const arrow_down = document.getElementById("arrow-down");
const hamburger = document.getElementById("hamburger");
const topMenu = document.getElementById("top-menu-2");
const topButtons = topMenu.lastElementChild;

arrow_down.addEventListener("click", () => {
  window.scrollTo({ top: 2300, left: 0, behavior: "smooth" });
});

//Enable the dropdown menu for mobile devices!!!
hamburger.onclick = () => {
  if (topMenu.style.display == "none") {
    topMenu.style.display = "flex";
    topMenu.style.backgroundColor = "rgba(41, 41, 41,0.6)";
    topMenu.style.flexDirection = "column";
    topMenu.style.position = "absolute";
    topMenu.style.top = "10%";
    topMenu.style.right = "0rem";
    topMenu.style.padding = "0.4rem 0";
    Array.from(topMenu.children).forEach((element) => {
      element.style.paddingTop = "0.1rem";
    });
  } else {
    topMenu.style.display = "none";
  }
};
