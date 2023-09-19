---
permalink: /signin
title: Sign In
---

## Sign In Below to Access Your Account

Please enter your username and password:

<form id="signInForm">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required><br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br><br>

    <input type="submit" value="Sign In">
</form>

<script>
    const apiUrl = '/NART_Movie/api/users.json'; // Relative path on your GitHub Pages website

    document.getElementById('signInForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the entered username and password
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Create an object with the user data
        const userData = {
            username: username,
            password: password
        };

        // Send the user data to your GitHub Pages website
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then((response) => {
            if (response.ok) {
                // Handle success, such as redirecting the user
                alert('Sign-in successful!');
            } else {
                // Handle failure, such as displaying an error message
                alert('Sign-in failed. Please try again.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
</script>