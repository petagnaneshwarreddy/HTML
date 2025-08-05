document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim(); // ← This line was missing

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Show success alert
    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    // Optionally, clear the form
    document.getElementById('contactForm').reset();
});
