// --- BASICS BAY page, runs only on basicsbay.html ---
const bbIsland = document.getElementById("bbIslandScreen");
const bbLevel  = document.getElementById("bbLevelScreen");

const bbClickScreen   = document.getElementById("bbClickScreen");
const bbClickBtn      = document.getElementById("bbClickBtn");

const bbClickScreen2  = document.getElementById("bbClickScreen2");
const bbClickBtn2     = document.getElementById("bbClickBtn2");

const bbCorrectScreen = document.getElementById("bbCorrectScreen");
const bbWrongScreen   = document.getElementById("bbWrongScreen");

const bbSigninScreen  = document.getElementById("bbSigninScreen");
const bbSigninClose   = document.getElementById("bbSigninClose");
const bbGuestBtn      = document.getElementById("bbGuestBtn");
const bbSignInBtn     = document.getElementById("bbSignInBtn");

const bbRecap0 = document.getElementById("bbRecap0");
const bbRecap1 = document.getElementById("bbRecap1");
const bbRecap2 = document.getElementById("bbRecap2");
const bbRecap3 = document.getElementById("bbRecap3");
const bbRecap4 = document.getElementById("bbRecap4");
const bbRecap5 = document.getElementById("bbRecap5");
const bbRecap6 = document.getElementById("bbRecap6");

const bbRecapLoading = document.getElementById("bbRecapLoading");

if (bbIsland && bbLevel) {
  let bbRound = 1;

  // Keep track of what is currently shown
  let bbCurrent = null;

  function bbCurrentClickScreen() {
    return bbRound === 1 ? bbClickScreen : bbClickScreen2;
  }

  function bbSwapTo(nextEl) {
    if (!nextEl) return;

    // hide previous immediately
    if (bbCurrent && bbCurrent !== nextEl) {
      bbCurrent.classList.add("is-hidden");
    }

    // show next immediately
    nextEl.classList.remove("is-hidden");

    bbCurrent = nextEl;
  }

  function bbFadeTo(fromEl, toEl) {
    if (!fromEl || !toEl) return;

    fromEl.classList.add("is-fading-out");

    setTimeout(() => {
      fromEl.classList.add("is-hidden");
      fromEl.classList.remove("is-fading-out");

      toEl.classList.remove("is-hidden");
      toEl.style.opacity = "0";
      requestAnimationFrame(() => (toEl.style.opacity = "1"));

      bbCurrent = toEl;
    }, 800);
  }

  function bbFlashThenReturn(screenToShow, ms) {
    bbSwapTo(screenToShow);
    setTimeout(() => bbSwapTo(bbCurrentClickScreen()), ms);
  }

  function bbStartRecap() {
    const order = [bbRecap0, bbRecap1, bbRecap2, bbRecap3, bbRecap4, bbRecap5, bbRecap6].filter(Boolean);
    if (order.length === 0) return;

    // recap0 starts full colour (overlay off)
    order.forEach(el => el.classList.remove("is-clear"));
    order[0].classList.add("is-clear");

    let i = 0;
    const timings = [1500, 2200, 1600, 1600, 1800, 1800, 2500];

    // show recap0
    bbSwapTo(order[i]);

    // after 1.2s, fade overlay in on recap0
    setTimeout(() => {
      order[0].classList.remove("is-clear");
    }, 1200);

    function next() {
      i++;

      if (i >= order.length) {
        bbSwapTo(bbRecapLoading);

        setTimeout(() => {
          window.location.href = "index.html";
        }, 3000);

        return;
      }

      bbSwapTo(order[i]);
      setTimeout(next, timings[i] || 1800);
    }

    // go recap1 after recap0 duration
    setTimeout(next, timings[0] || 1500);
  }

  // ===== Start state =====
  bbCurrent = bbIsland;
  bbSwapTo(bbIsland);

  // A -> B
  setTimeout(() => {
    bbFadeTo(bbIsland, bbLevel);

    // B -> C1
    setTimeout(() => {
      bbRound = 1;
      bbFadeTo(bbLevel, bbClickScreen);
    }, 5000);
  }, 5000);

  // Round 1 correct
  bbClickBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    bbSwapTo(bbCorrectScreen);

    setTimeout(() => {
      bbRound = 2;
      bbSwapTo(bbClickScreen2);
    }, 1500);
  });

  // Round 2 correct 
  bbClickBtn2?.addEventListener("click", (e) => {
    e.stopPropagation();
    bbSwapTo(bbCorrectScreen);

    setTimeout(() => {
      if (bbSigninScreen) bbSwapTo(bbSigninScreen);
    }, 1500);
  });

  // Wrong clicks
  bbClickScreen?.addEventListener("click", () => {
    bbFlashThenReturn(bbWrongScreen, 2200);
  });

  bbClickScreen2?.addEventListener("click", () => {
    bbFlashThenReturn(bbWrongScreen, 2200);
  });

  // Sign-in buttons to recap
  bbSigninClose?.addEventListener("click", (e) => {
    e.stopPropagation();
    bbStartRecap();
  });

  bbGuestBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    bbStartRecap();
  });

  bbSignInBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    bbStartRecap();
  });

} else {
}

  // HOMEPAGE

  const splash = document.getElementById("splash");
  if (!splash) {
    // Not index.html and not basicsbay.html = do nothing
  } else {
    const loadingPage = document.getElementById("loadingPage");
    const homepage = document.getElementById("homepage");

    const logo = document.getElementById("logo");
    const studioText = document.getElementById("studioText");
    const presentsText = document.getElementById("presentsText");
    const titleText = document.getElementById("titleText");

    const welcomeText = document.querySelector(".welcomeText");
    const taglineText = document.querySelector(".taglineText");

    const chestScreen = document.getElementById("chestScreen");
    const startScreen = document.getElementById("startScreen");
    const loaderScreen2 = document.getElementById("loaderScreen2");

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

    // 3) After splash ends then show loading page
    setTimeout(() => {
      splash.style.opacity = "0";

      loadingPage.style.opacity = "1";
      loadingPage.style.pointerEvents = "auto";

      setTimeout(() => {
        splash.style.display = "none";
      }, 800);
    }, 5200);

    // 4) hide loader, show welcome
    setTimeout(() => {
      const loaderAnim = document.querySelector("#loadingPage .loader");
      if (loaderAnim) loaderAnim.style.opacity = "0";
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
      welcomeText.classList.remove("show");
      taglineText.classList.remove("show");

      loadingPage.style.opacity = "0";
      loadingPage.style.pointerEvents = "none";

      homepage.classList.add("show");

      setTimeout(() => homepage.classList.add("scene-in"), 200);
      setTimeout(() => homepage.classList.add("logo-in"), 1600);

      // phase-2
      setTimeout(() => homepage.classList.add("phase-2"), 4200);

      // phase-3 (chest)
      setTimeout(() => {
        chestScreen.hidden = false;
        homepage.classList.add("phase-3");
      }, 7000);

      // phase-4
      setTimeout(() => {
        startScreen.hidden = false;
        homepage.classList.add("phase-4");
      }, 10500);

      // phase-5
      setTimeout(() => {
        loaderScreen2.hidden = false;
        homepage.classList.add("phase-5");
      }, 13500);

      // After loader2 plays a bit then go to Basics Bay page
      setTimeout(() => {
        window.location.href = "basicsbay.html";
      }, 16500);

    }, 17000);
  }