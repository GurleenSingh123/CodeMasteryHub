// let currentMode = null;

// function loadAds() {
//   const isLocal =
//     location.hostname === "localhost" ||
//     location.hostname === "127.0.0.1" ||
//     location.hostname.startsWith("192.168") ||
//     location.hostname.startsWith("10.") ||
//     location.search.includes("vscode-livepreview");

//   if (isLocal) return;

//   const screenWidth = window.innerWidth;

//   // Decide mode
//   let newMode = screenWidth < 768 ? "mobile" : "desktop";

//   // ❌ If same mode → do nothing
//   if (newMode === currentMode) return;

//   currentMode = newMode;

//   document.querySelectorAll(".ad-slot").forEach((slot) => {
//     slot.innerHTML = ""; // clear old ad

//     let key, width, height;

//     if (newMode === "mobile") {
//       key = "5046bdbb7430148c76b1b94cc7228485";
//       width = 300;
//       height = 250;
//     } else {
//       key = "7e50b6e48a1f443835e0a43c6da04b8d";
//       width = 728;
//       height = 90;
//     }

//     const config = document.createElement("script");
//     config.innerHTML = `
//       atOptions = {
//         'key' : '${key}',
//         'format' : 'iframe',
//         'height' : ${height},
//         'width' : ${width},
//         'params' : {}
//       };
//     `;

//     const invoke = document.createElement("script");
//     invoke.src = `https://www.highperformanceformat.com/${key}/invoke.js`;

//     slot.appendChild(config);
//     slot.appendChild(invoke);
//   });
// }

// // Run on load
// document.addEventListener("DOMContentLoaded", loadAds);

// // Run on resize (optimized)
// window.addEventListener("resize", loadAds);