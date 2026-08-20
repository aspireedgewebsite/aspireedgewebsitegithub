import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scripts that bind behavior to DOM elements present on the current page.
// These need to run again after every client-side route change because
// React swaps out the page content without a full browser reload.
const REINIT_SCRIPTS = [
  "/assets/js/mobile-menu.js",
  "/assets/js/jquery.lineProgressbar.js",
  "/assets/js/jquery.countup.js",
  "/assets/js/ripple-btn.js",
  "/assets/js/text-animation.js",
  "/assets/js/SmoothScroll.js",
  "/assets/js/main.js",
];

let firstRun = true;

export default function useReinitLegacyScripts() {
  const location = useLocation();

  useEffect(() => {
    // Skip re-injecting on the very first mount; index.html + main.jsx
    // handle initial load, and these scripts haven't been loaded at all yet.
    const timer = setTimeout(() => {
      // Remove any previously injected copies to avoid stacking duplicate
      // event handlers.
      document
        .querySelectorAll("script[data-legacy-reinit='true']")
        .forEach((el) => el.remove());

      REINIT_SCRIPTS.forEach((src) => {
        const script = document.createElement("script");
        script.src = `${src}?t=${Date.now()}`;
        script.async = false;
        script.dataset.legacyReinit = "true";
        document.body.appendChild(script);
      });

      if (window.AOS && typeof window.AOS.init === "function") {
        window.AOS.init();
      }
      firstRun = false;
    }, 60);

    return () => clearTimeout(timer);
  }, [location.pathname]);
}
