document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get input values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();

            // Basic validation
            if (!name || !email || !phone || !message) {
                alert("Please fill out all fields before submitting.");
                return;
            }

            // Show success message
            successMessage.style.display = "block";
            successMessage.textContent = "Your message has been sent successfully!";
            
            // Reset form after submission
            form.reset();

            // Hide success message after 3 seconds (optional)
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 10000);
        });
    } else {
        console.error("Form element not found!");
    }
});
