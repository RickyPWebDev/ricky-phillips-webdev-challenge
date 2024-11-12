function authenticate(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (userName === '' || password === '') {
        alert('Please enter a username and password');
        return;
    }

    // Add your authentication logic here
    // Example: If authentication is successful, redirect to home.html
    if (userName === "user" && password === "password") {
        window.location.href = "home.html"; // Redirects to home.html
    } else {
        alert("Invalid username or password");
    }
}
