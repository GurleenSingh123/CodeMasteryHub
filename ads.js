document.addEventListener("DOMContentLoaded", () => {

  const isLocal =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname.startsWith("192.168") ||
    location.hostname.startsWith("10.") ||
    location.search.includes("vscode-livepreview");

  if (isLocal) return;

  const screenWidth = window.innerWidth;

  document.querySelectorAll(".ad-slot").forEach((slot) => {

    let key, width, height;

    // 📱 Mobile (0–767px)
    if (screenWidth < 768) {
      key = "5046bdbb7430148c76b1b94cc7228485"; // mobile key
      width = 300;
      height = 250;

    // 💻 Desktop (768px and above)
    } else {
      key = "7e50b6e48a1f443835e0a43c6da04b8d"; // desktop key
      width = 728;
      height = 90;
    }

    // Create config script
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

    // Create invoke script
    const invoke = document.createElement("script");
    invoke.src = `https://www.highperformanceformat.com/${key}/invoke.js`;

    // Append to slot
    slot.appendChild(config);
    slot.appendChild(invoke);

  });

});