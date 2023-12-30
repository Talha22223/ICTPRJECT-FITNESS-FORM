function handleFormSubmit(event) {
    // Stop the form from actually submitting
    event.preventDefault();

    // Grab the email input value
    var email = document.querySelector('input[type="text"]').value;

    // Display an alert with the entered email
    alert('Thanks for joining! Submitted email: ' + email);
}

// Attach an event listener to the form
document.querySelector('form').addEventListener('submit', handleFormSubmit);

// Now, let's make the JOIN NOW button more exciting!

// This function handles button clicks
function handleButtonClick() {
    // Change the background color of the page to something vibrant
    document.body.style.backgroundColor = '#3498db'; // A shade of blue
}

// Attach an event listener to the button
document.querySelector('button').addEventListener('click', handleButtonClick);
