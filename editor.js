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

    // Run on load
    runCode();

    // Run button
    runBtn.addEventListener("click", runCode);

    function runCode() {
        let code = codeArea.value;

        // Default: just show code
        let fullCode = code;

        // ✅ Inject JS ONLY if needed
        if (code.includes("showData")) {
            fullCode += `
            <script>
            function showData(e) {
                e.preventDefault();

                var form = e.target;

                // Name & Email
                var name = document.getElementById("name")?.value || "";
                var email = document.getElementById("email")?.value || "";

                // Gender (radio)
                var genderEl = document.querySelector('input[name="gender"]:checked');
                var gender = genderEl ? genderEl.value : "Not selected";

                // Skills (checkbox)
                var skills = [];
                document.querySelectorAll('input[name="skill[]"]:checked').forEach(function (el) {
                    skills.push(el.value);
                });

                // Message
                var message = document.getElementById("message")?.value || "";

                // Output (only if result div exists)
                var resultDiv = document.getElementById("result");
                if (resultDiv) {
                    resultDiv.innerHTML =
                        "<div style='padding:10px;border:1px solid #ccc;margin-top:10px'>" +
                        "<h3>Form Data</h3>" +
                        "<p><b>Name:</b> " + name + "</p>" +
                        "<p><b>Email:</b> " + email + "</p>" +
                        "<p><b>Gender:</b> " + gender + "</p>" +
                        "<p><b>Skills:</b> " + (skills.length ? skills.join(", ") : "None") + "</p>" +
                        "<p><b>Message:</b> " + message + "</p>" +
                        "</div>";
                }

                // Reset form
                form.reset();
            }
            <\/script>
            `;
        }

        // Show in iframe
        output.srcdoc = fullCode;
    }

});