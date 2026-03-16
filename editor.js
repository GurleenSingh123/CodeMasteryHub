// window.onload = function () {

//     // Get code from localStorage
//     let savedCode = localStorage.getItem("editorCode");

//     if (savedCode) {
//         document.getElementById("code").value = savedCode;
//     }

//     // Run automatically
//     document.getElementById("runBtn").click();
// };


// document.getElementById("runBtn").addEventListener("click", function () {
//     let code = document.getElementById("code").value;
//     document.getElementById("output").srcdoc = code;
// });

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