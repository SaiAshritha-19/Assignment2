document.addEventListener("DOMContentLoaded", function() {
  var profileData = JSON.parse(localStorage.getItem("profileData"));

  if (profileData) {
      document.getElementById("firstName").textContent = profileData.firstName;
      document.getElementById("lastName").textContent = profileData.lastName;
      document.getElementById("dob").textContent = profileData.dob;
      document.getElementById("gender").textContent = profileData.gender;
  } else {
      window.location.href = "index.html";
  }
});