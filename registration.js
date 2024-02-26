document.addEventListener("DOMContentLoaded", function() {
  var registrationForm = document.getElementById("registrationForm");
  var submitButton = document.getElementById("submitButton");

  registrationForm.addEventListener("input", toggleSubmitButton);

  function toggleSubmitButton() {
      var inputs = registrationForm.querySelectorAll("input[type='text'], input[type='password'], input[type='date'], input[type='radio']:checked");
      var allFilled = true;
      inputs.forEach(function(input) {
          if (input.value.trim() === "") {
              allFilled = false;
          }
      });

      if (allFilled) {
          submitButton.removeAttribute("disabled");
      } else {
          submitButton.setAttribute("disabled", "disabled");
      }
  }

  registrationForm.addEventListener("submit", function(event) {
      event.preventDefault();

      var username = document.getElementById("username").value.trim();
      var firstName = document.getElementById("firstName").value.trim();
      var lastName = document.getElementById("lastName").value.trim();
      var dob = document.getElementById("dob").value.trim();
      var gender = document.querySelector('input[name="gender"]:checked').value;
      var password = document.getElementById("password").value.trim();
      var confirmPassword = document.getElementById("confirmPassword").value.trim();

      if (password !== confirmPassword) {
          document.getElementById("passwordError").textContent = "Passwords do not match";
          return;
      }

      var userData = {
          username: username,
          firstName: firstName,
          lastName: lastName,
          dob: dob,
          gender: gender,
          password: password
      };
      localStorage.setItem("profileData", JSON.stringify(userData));

      window.location.href = "profile.html";

      alert("Registration successful!");
  });
});
