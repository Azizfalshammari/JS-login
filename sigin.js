document.addEventListener("DOMContentLoaded", async function () {
  var signUpForm = document.getElementById("signUpForm");
  var username = document.getElementById("username");
  var usernameError = document.getElementById("usernameError");
  var password = document.getElementById("password");
  var passwordError = document.getElementById("passwordError");

  signUpForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    usernameError.textContent = "";
    passwordError.textContent = "";

    var isValid = true;

    if (username.value.trim().length <= 5) {
      isValid = false;
      usernameError.textContent = "Username must be more than 5 characters.";
    }

    if (password.value.trim().length <= 8) {
      isValid = false;
      passwordError.textContent = "Password must be more than 8 characters.";
    }

    if (isValid) {
      try {
        const response = await fetch(
          "https://665855e85c3617052647fe40.mockapi.io/catlooker"
        );
        const users = await response.json();

        const isValidCredentials = users.some(function (user) {
          return (
            user.username === username.value.trim() &&
            user.password === password.value.trim()
          );
        });

        if (isValidCredentials) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem('Name', username.value);
          window.location.replace('landingpage.html');
        } else {
          usernameError.textContent = "Invalid username or password.";
        }
      } catch (error) {
        console.error("Error:", error);

        alert(
          "An error occurred while fetching user data. Please try again later."
        );
      }
    }
  });
});
