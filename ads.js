const isLocal =
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1" ||
  location.hostname.startsWith("192.168") ||
  location.hostname.startsWith("10.") ||
  location.search.includes("vscode-livepreview");

if (!isLocal) {

    const popScript = document.createElement("script");
      popScript.src = "https://pl29158690.profitablecpmratenetwork.com/ed/eb/5b/edeb5bf1574b6315333045a1b56cc9a9.js";
      document.body.appendChild(popScript);

    const isMobile = window.innerWidth <= 768;
    
    document.querySelectorAll(".ad-slot").forEach((slot) => {
    
      const key = isMobile
        ? slot.dataset.mobile
        : slot.dataset.desktop;
    
      const width = isMobile ? 300 : 728;
      const height = isMobile ? 250 : 90;
    
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
    
    });

}