let currentMode = null;
let adsInitialized = false;

function loadAds() {

  const isLocal =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname.startsWith("192.168") ||
    location.hostname.startsWith("10.") ||
    location.search.includes("vscode-livepreview");

  if (isLocal) return;

  const screenWidth = window.innerWidth;
  const newMode = screenWidth < 768 ? "mobile" : "desktop";

  // ❌ Prevent unnecessary reload
  if (newMode === currentMode && adsInitialized) return;

  currentMode = newMode;

  const slots = document.querySelectorAll(".ad-slot");

  // 🔍 Debug (you can remove later)
  console.log("Ad slots found:", slots.length);

  slots.forEach((slot, index) => {

    // ❌ Prevent reloading same slot again
    if (slot.dataset.loaded === "true" && newMode === currentMode) return;

    slot.innerHTML = ""; // clear only when needed

    let key, width, height;

    if (newMode === "mobile") {
      key = "5046bdbb7430148c76b1b94cc7228485";
      width = 300;
      height = 250;
    } else {
      key = "7e50b6e48a1f443835e0a43c6da04b8d";
      width = 728;
      height = 90;
    }

    const config = document.createElement("script");
    config.innerHTML = `
      atOptions = {
        'key' : '${key}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;

    const invoke = document.createElement("script");
    invoke.src = `https://www.highperformanceformat.com/${key}/invoke.js`;

    slot.appendChild(config);
    slot.appendChild(invoke);

    // ✅ Mark slot as loaded
    slot.dataset.loaded = "true";
  });

  adsInitialized = true;
}

// Run after DOM is ready
document.addEventListener("DOMContentLoaded", loadAds);

// ✅ Optimized resize (debounce)
let resizeTimeout;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(loadAds, 300);
});