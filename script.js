document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Gather the form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // You can add code here to send the form data to a server or handle it as needed
    // For now, we'll just display a confirmation message
    const confirmationMessage = `Thank you, ${name}! Your message has been received.`;
    document.getElementById('confirmationMessage').innerText = confirmationMessage;

    // Clear the form fields
    document.getElementById('contactForm').reset();
});