const splash = document.getElementById("splash");
const homepage = document.getElementById("homepage");

const logo = document.getElementById("logo");
const studioText = document.getElementById("studioText");
const presentsText = document.getElementById("presentsText");
const titleText = document.getElementById("titleText");

// 1) show logo
setTimeout(() => {
  logo.classList.add("show");
}, 500);

// 2) show "FlowState Studios"
setTimeout(() => {
  studioText.classList.add("showText");
}, 2600);

// 3) show "Presents to you"
setTimeout(() => {
  presentsText.classList.add("showText");
}, 2900);

// 4) show wordmark logo
setTimeout(() => {
  titleText.classList.add("showText");
}, 4000);

// 5) stay for a bit, then go homepage
setTimeout(() => {
  splash.style.display = "none";
  homepage.hidden = false;
}, 5500);