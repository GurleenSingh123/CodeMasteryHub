document.addEventListener("DOMContentLoaded", () => {

  const isLocal =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname.startsWith("192.168") ||
    location.hostname.startsWith("10.") ||
    location.search.includes("vscode-livepreview");

  if (isLocal) return;

  // ✅ Load popunder/social ad (only once)
  const popScript = document.createElement("script");
  popScript.src = "https://pl29158690.profitablecpmratenetwork.com/ed/eb/5b/edeb5bf1574b6315333045a1b56cc9a9.js";
  document.body.appendChild(popScript);

  // ✅ Detect screen width
  const screenWidth = window.innerWidth;

  document.querySelectorAll(".ad-slot").forEach((slot) => {

    let key, width, height;

    // 📱 Mobile (0–480px)
    if (screenWidth <= 480) {
      key = slot.dataset.mobile;
      width = 300;
      height = 250;

    // 💻 Desktop (768px+)
    } else if (screenWidth >= 768) {
      key = slot.dataset.desktop;
      width = 728;
      height = 90;

    // 📱 Tablet (481–767px) → treat as mobile (recommended)
    } else {
      key = slot.dataset.mobile;
      width = 300;
      height = 250;
    }

    // ✅ Create config script
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

    // ✅ Create invoke script
    const invoke = document.createElement("script");
    invoke.src = `https://www.highperformanceformat.com/${key}/invoke.js`;

    // ✅ Append to slot
    slot.appendChild(config);
    slot.appendChild(invoke);

  });

});