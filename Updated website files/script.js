function validateInput(inputId) {
    const input = document.getElementById(inputId);
    const errorSpan = document.getElementById(`${inputId}Error`);
    const inputValue = input.value.trim();

    let errorMessage = "";
    
    switch (inputId) {
        case "Fname":
            if (inputValue === "") {
                errorMessage = "First name is required.";
            }
            break;
        case "Lname":
            if (inputValue === "") {
                errorMessage = "Last name is required.";
            }
            break;
        case "email":
            if (inputValue === "") {
                errorMessage = "Email is required.";
            } else if (!validateEmail(inputValue)) {
                errorMessage = "Invalid email format.";
            }
            break;
        case "pNumber":
            if (inputValue === "") {
                errorMessage = "Phone number is required.";
            } else if (!validatePhoneNumber(inputValue)) {
                errorMessage = "Invalid phone number format.";
            }
            break;
        case "password":
            if (inputValue === "") {
                errorMessage = "Password is required.";
            }
            break;
        case "confirmPassword":
            const passwordInput = document.getElementById("password");
            const passwordValue = passwordInput.value.trim();
            if (inputValue === "") {
                errorMessage = "Please confirm your password.";
            } else if (inputValue !== passwordValue) {
                errorMessage = "Passwords do not match.";
            }
            break;
    }

    errorSpan.textContent = errorMessage;
}

function validateEmail(email) {
    // Email validation logic, you can use a regular expression or any other method
    // Return true if the email is valid, false otherwise
    // Example regular expression for email validation:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    // Phone number validation logic, you can use a regular expression or any other method
    // Return true if the phone number is valid, false otherwise
    // Example regular expression for phone number validation:
    const phoneNumberRegex = /^\d{10}$/; // Assumes the phone number should be exactly 10 digits
    return phoneNumberRegex.test(phoneNumber);
}

document.getElementById("register").addEventListener("click", function() {
    // Perform the registration process here
    // Add additional logic if needed

    // Validate all input fields before proceeding with registration
    validateInput("Fname");
    validateInput("Lname");
    validateInput("email");
    validateInput("pNumber");
    validateInput("password");
    validateInput("confirmPassword");

    // Check if there are any error messages present
    const errorSpans = document.getElementsByClassName("error");
    let hasErrors = false;
    for (let i = 0; i < errorSpans.length; i++) {
        if (errorSpans[i].textContent !== "") {
            hasErrors = true;
            break;
        }
    }

    if (hasErrors) {
        alert("Please fix the errors before submitting the form.");
    } else {
        // Proceed with registration process
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Registration successful!!");
                window.location.replace("login.html");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                alert(errorMessage);
            });
    }
});


    



