const form = document.getElementById('form');
const msg = document.getElementById('successMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailjs.send("service_lbeonpb", "template_fci0fgg", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("textarea").value
    })
    form.reset();

    msg.innerText = "Message sent successfully!";

    setTimeout(() => {
        msg.innerText = "";
    }, 3000);
})

const fields = document.querySelectorAll("#form .inputField");

fields.forEach((field, index) => {

    field.addEventListener("keydown", function(e) {

        // DOWN ARROW → next input
        if (e.key === "ArrowDown") {
            e.preventDefault();

            if (index < fields.length - 1) {
                fields[index + 1].focus();
            }
        }

        // UP ARROW → previous input
        if (e.key === "ArrowUp") {
            e.preventDefault();

            if (index > 0) {
                fields[index - 1].focus();
            }
        }

        if (e.key === "Enter") {
            e.preventDefault();
            form.requestSubmit();   // submit the form
        }

    });

});