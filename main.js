


async function signUp() {
    console.log('triggered')
    let Response = await fetch(
      "https://665855e85c3617052647fe40.mockapi.io/catlooker",
      {
        method: "POST",
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          password: password.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    let data = await Response.json();
    window.location.replace('signin.html')
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    var signUpForm = document.getElementById('signUpForm');
    var username = document.getElementById('username');
    var usernameError = document.getElementById('usernameError');
    var email = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var password = document.getElementById('password');
    var passwordError = document.getElementById('passwordError');
    
    // Add event listener for form submission
    signUpForm.addEventListener('submit', function validate(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        // Clear previous error messages
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';

        // Perform validation
        var isValid = true;
        
        if (username.value.trim().length <= 5) {
            isValid = false;
            usernameError.textContent = 'Username must be more than 5 characters.';
        }

        if (!validateEmail(email.value)) {
            isValid = false;
            emailError.textContent = 'Please enter a valid email address.';
        }

        if (password.value.trim().length <= 8) {
            isValid = false;
            passwordError.textContent = 'Password must be more than 8 characters.';
        }

        if (isValid) {
            signUp()
            console.log('Form is valid');
     
        }
    });

    function validateEmail(email) {
        // Simple email validation regex
        var re = /^(([^<>()\[\]\.,;:\s@"]+(.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});
