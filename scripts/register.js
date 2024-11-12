
async function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const formData = {
        username: username,
        email: email,
        password: password
    };

    // Send registration data to server
    const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        alert("Registration successful!");
        window.location.href = "index.html"; // Redirect to login page
    } else {
        const errorData = await response.json();
        alert(errorData.message || "Error during registration. Please try again.");
    }
}
