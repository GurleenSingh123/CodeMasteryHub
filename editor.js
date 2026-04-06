document.addEventListener("DOMContentLoaded", function () {

    const runBtn = document.getElementById("runBtn");
    const codeArea = document.getElementById("code");
    const output = document.getElementById("output");

    // Load saved code
    let savedCode = localStorage.getItem("editorCode");
    if (savedCode) {
        codeArea.value = savedCode;
    }

    // Run automatically
    output.srcdoc = codeArea.value;

    // Run button
    runBtn.addEventListener("click", function () {
        output.srcdoc = codeArea.value;
    });

});