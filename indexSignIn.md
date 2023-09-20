---
permalink: /signin
title: Sign In
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Authentication</title>
</head>
<body>
    <h2>User Authentication</h2>

    <!-- Login/Register Form -->
    <div id="login-register-form">
        <h3>Login or Register</h3>
        <form id="auth-form">
            <label for="username">Username:</label>
            <input type="text" id="username" required><br><br>

            <label for="password">Password:</label>
            <input type="password" id="password" required><br><br>

            <button type="button" onclick="authenticate()">Submit</button>
        </form>
    </div>

    <!-- Display Messages -->
    <div id="message"></div>

    <script>
        // Function to authenticate the user
        function authenticate() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Check if the user exists in localStorage
            const storedUser = localStorage.getItem(username);

            if (storedUser) {
                const userData = JSON.parse(storedUser);
                if (userData.password === password) {
                    document.getElementById("message").innerText = 'Sign-in successful';
                } else {
                    document.getElementById("message").innerText = 'Sign-in failed';
                }
            } else {
                // Create a new user in localStorage
                const newUser = { username, password };
                localStorage.setItem(username, JSON.stringify(newUser));
                document.getElementById("message").innerText = 'Registration successful';
            }
        }
    </script>
</body>
</html>
