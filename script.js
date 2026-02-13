const splash = document.getElementById("splash");
const loadingPage = document.getElementById("loadingPage");
const homepage = document.getElementById("homepage");

const logo = document.getElementById("logo");
const studioText = document.getElementById("studioText");
const presentsText = document.getElementById("presentsText");
const titleText = document.getElementById("titleText");

const welcomeText = document.querySelector(".welcomeText");
const taglineText = document.querySelector(".taglineText");
const chestScreen = document.getElementById("chestScreen");

// 1) Logo appears
setTimeout(() => {
  logo.classList.add("show");
}, 500);

// 2) Text sequence
setTimeout(() => {
  studioText.classList.remove("hiddenText");
  studioText.classList.add("showText");
}, 2600);

setTimeout(() => {
  presentsText.classList.remove("hiddenText");
  presentsText.classList.add("showText");
}, 2900);

setTimeout(() => {
  titleText.classList.remove("hiddenText");
  titleText.classList.add("showText");
}, 4000);

// 3) After splash ends → show loading page
setTimeout(() => {
  // fade splash out
  splash.style.opacity = "0";

  // fade loading in
  loadingPage.style.opacity = "1";
  loadingPage.style.pointerEvents = "auto";

  // after fade finishes, remove splash from view
  setTimeout(() => {
    splash.style.display = "none";
  }, 800); // match CSS transition time (0.8s)
}, 5200);

// 4) hide loader, show welcome
setTimeout(() => {
  document.querySelector(".loader").style.opacity = "0";
  welcomeText.classList.add("show");
}, 9000);

// 5) hide welcome, show tagline
setTimeout(() => {
  welcomeText.classList.remove("show");
  taglineText.classList.add("show");
}, 11500);

// 6) hide tagline before homepage
setTimeout(() => {
  taglineText.classList.remove("show");
}, 20000);

// 7) Then show homepage
setTimeout(() => {
  loadingPage.style.opacity = "0";
  loadingPage.style.pointerEvents = "none";

  homepage.classList.add("show");

  setTimeout(() => {
    homepage.classList.add("scene-in");
  }, 200);

  setTimeout(() => {
    homepage.classList.add("logo-in");
  }, 1600);

  // phase-2
  setTimeout(() => {
    homepage.classList.add("phase-2");
  }, 4200);

  // phase-3 (SHOW CHEST)
  setTimeout(() => {
    chestScreen.hidden = false;       // <-- IMPORTANT
    homepage.classList.add("phase-3");
  }, 7000);

}, 15000);