document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".form-box").addEventListener("submit", function(event) {
        event.preventDefault(); // Stop default form submission
        alert("Your message has been sent successfully!"); // Show success message
        this.submit(); // Now submit the form
    });
});
