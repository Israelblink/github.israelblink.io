// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact Form Submission Handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  // Simulated success message
  status.textContent = "Message sent successfully!";
  status.style.color = "green";

  // Clear form
  document.getElementById("contactForm").reset();
});
