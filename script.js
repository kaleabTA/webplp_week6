// ============================
// Custom Form Validation
// ============================

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from refreshing the page

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const messageDiv = document.getElementById("form-message");

  let errors = [];

  // Validate username
  if (username.length < 3) {
    errors.push("Username must be at least 3 characters.");
  }

  // Validate email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Validate password
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show validation results
  if (errors.length > 0) {
    messageDiv.innerHTML = `<p class="error">${errors.join("<br>")}</p>`;
  } else {
    messageDiv.innerHTML = `<p class="success">Form submitted successfully! 🎉</p>`;
  }
});

// ============================
// Interactive Feature 1: Change background color
// ============================

document.getElementById("changeColorBtn").addEventListener("click", function () {
  const colors = ["#f9c74f", "#90be6d", "#577590", "#f94144", "#43aa8b"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// ============================
// Interactive Feature 2: Click counter
// ============================

let count = 0;
document.getElementById("countBtn").addEventListener("click", function () {
  count++;
  document.getElementById("countDisplay").textContent = count;
});
