document.addEventListener("DOMContentLoaded", function() {
  var loginForm = document.getElementById("loginForm");
  var loginUsername = document.getElementById("loginUsername");
  var loginPassword = document.getElementById("loginPassword");
  var submitButton = document.getElementById("submitButton");

  loginUsername.addEventListener("input", toggleSubmitButton);
  loginPassword.addEventListener("input", toggleSubmitButton);

  function toggleSubmitButton() {
      if (loginUsername.value.trim() !== "" && loginPassword.value.trim() !== "") {
          submitButton.removeAttribute("disabled");
      } else {
          submitButton.setAttribute("disabled", "disabled");
      }
  }

  loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      var username = loginUsername.value.trim();
      var password = loginPassword.value.trim();

      var userData = JSON.parse(localStorage.getItem("profileData"));

      if (userData && userData.username === username && userData.password === password) {
          localStorage.setItem("currentUser", username);
          window.location.href = "profile.html";

          alert("Login successful!");
      } else {
          alert("Invalid username or password. Please try again.");
          loginForm.reset();
      }
  });
});