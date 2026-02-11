const splash = document.getElementById("splash");
const loadingPage = document.getElementById("loadingPage");
const homepage = document.getElementById("homepage");

const logo = document.getElementById("logo");
const studioText = document.getElementById("studioText");
const presentsText = document.getElementById("presentsText");
const titleText = document.getElementById("titleText");

// Optional: sharpen ONLY the loader lottie (won't crash if not found)
const loaderLottie = document.querySelector("#loadingPage .loader");
if (loaderLottie) {
  loaderLottie.renderConfig = {
    devicePixelRatio: Math.min(window.devicePixelRatio, 2)
  };
}

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
  splash.style.display = "none";
  loadingPage.style.opacity = "1";
  loadingPage.style.pointerEvents = "auto";
}, 5200);

// 4) Then show homepage
setTimeout(() => {
  loadingPage.style.opacity = "0";
  loadingPage.style.pointerEvents = "none";
  homepage.hidden = false;
}, 12000);