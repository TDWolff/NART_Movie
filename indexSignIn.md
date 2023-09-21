---
permalink: /signin
title: Sign In
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign-In</title>
</head>
<body>
    <h1>Sign-In/Register</h1>
    
    <form id="signInForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        
        <input type="button" value="Sign In" id="submitBtn">
    </form>

    <div id="errorMessage" style="color: red;"></div>

    <script>
        document.getElementById("submitBtn").addEventListener("click", function () {
            // Get the username and password input values
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Check if both fields are filled
            if (!username || !password) {
                document.getElementById("errorMessage").textContent = "Both username and password are required.";
                return;
            }

            // Create a JSON object with the data
            const data = { username, password };

            // Send a POST request to the server
            fetch("http://127.0.0.1:6700/append", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    // Data appended successfully
                    document.getElementById("errorMessage").textContent = "Data appended successfully.";
                } else {
                    // Error occurred
                    document.getElementById("errorMessage").textContent = "Error appending data.";
                }
            })
            .catch(error => {
                console.error(error);
                document.getElementById("errorMessage").textContent = "An error occurred.";
            });
        });
    </script>
</body>
</html>
