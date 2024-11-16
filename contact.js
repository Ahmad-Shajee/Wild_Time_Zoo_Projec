function validateForm(event) {
    // Clear previous error messages
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("phone-error").innerHTML = "";
    document.getElementById("success-message").innerHTML = "";

    // Get values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    let isValid = true;

    // Validate Name: Check if it is not empty
    if (name === "") {
        document.getElementById("name-error").innerHTML = "Name is required.";
        isValid = false;
    }

    // Validate Email: Check if it's in the correct format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Phone Number: Check if it contains only digits
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phone-error").innerHTML = "Please enter digits for the phone number.";
        isValid = false;
    }

    // Display success or error message and prevent form submission if validation fails
    if (isValid) {
        document.getElementById("success-message").innerHTML = "Form submitted successfully!";
        document.getElementById("success-message").style.color = "Green";
    } else {
        document.getElementById("success-message").innerHTML = "There are errors in the form.";
        document.getElementById("success-message").style.color = "Red";
    }

    // Prevent page refresh and form submission if validation fails
    event.preventDefault();

    return isValid; // Return whether the form is valid or not
}
