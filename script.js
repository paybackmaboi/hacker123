document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById("login-btn");
    var modal = document.getElementById("login-modal");/*responsible for modal*/  
    var span = document.getElementsByClassName("close")[0];
    var form = document.getElementById("login-form");

    if (modal && btn && span && form) {
        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        form.onsubmit = function(event) {
            event.preventDefault(); // Prevent form submission

            // Simple validation 
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username === "admin" && password === "roy123") {
                // Redirect to dashboard.html on successful login
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password.");
            }
        }
    } else {
        console.error("Modal, button, form, or close element not found");
    }

});


