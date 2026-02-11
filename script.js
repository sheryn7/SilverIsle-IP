const splash = document.getElementById("splash");
const loadingPage = document.getElementById("loadingPage");
const homepage = document.getElementById("homepage");

const logo = document.getElementById("logo");
const studioText = document.getElementById("studioText");
const presentsText = document.getElementById("presentsText");
const titleText = document.getElementById("titleText");

const welcomeText = document.querySelector(".welcomeText");

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

// 4) After a few seconds → hide loader, show welcome
setTimeout(() => {
  document.querySelector(".loader").style.opacity = "0";
  welcomeText.style.opacity = "1";
  welcomeText.style.transform = "translateY(0)";
}, 9000);


// 5) Then show homepage
setTimeout(() => {
  loadingPage.style.opacity = "0";
  loadingPage.style.pointerEvents = "none";
  homepage.hidden = false;
}, 14000);