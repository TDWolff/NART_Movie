---
permalink: /signin
title: Sign In
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign-In/Register and CSV Data</title>
</head>
<body>
    <h1>Sign-In/Register</h1>
    
    <form id="signInForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        
        <!-- Use a single button for both sign-in and registration -->
        <input type="button" value="Sign In / Register" id="signInRegisterBtn">
    </form>

    <div id="errorMessage" style="color: red;"></div>


    <script>
        let csvUserData; // To store CSV user data

        // Function to retrieve CSV data from the server
        function getCSVData() {
            // Send a GET request to the server to retrieve CSV data
            fetch("http://127.0.0.1:6700/get_csv_data")
                .then(response => response.text())
                .then(csvData => {
                    // Store the CSV data
                    csvUserData = csvData;
                    // Display the CSV data in the <pre> element
                    document.getElementById("csvData").textContent = csvData;
                })
                .catch(error => {
                    console.error(error);
                    document.getElementById("csvData").textContent = "An error occurred while retrieving CSV data.";
                });
        }

        // Attach event listener to the Sign In/Register button
        document.getElementById("signInRegisterBtn").addEventListener("click", signInOrRegister);

        // Call the function to retrieve CSV data
        getCSVData();

        // Function to send a POST request for sign-in/registration
        function signInOrRegister() {
            // Get the username and password input values
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Check if both fields are filled
            if (!username || !password) {
                document.getElementById("errorMessage").textContent = "Both username and password are required.";
                return;
            }

            // Split the CSV data into an array of lines
            const csvLines = csvUserData.split('\n');

            // Check if the username already exists in the CSV data
            let usernameExists = false;
            for (const line of csvLines) {
                const userData = line.split(','); // Assuming CSV format: username,password
                if (userData[0] === username) {
                    usernameExists = true;
                    break;
                }
            }

            if (usernameExists) {
                // Username already exists
                document.getElementById("errorMessage").textContent = "Username is already taken.";
            } else {
                // Username is unique, add it to the CSV data
                const newUserEntry = `${username},${password}`;
                // Append the new user entry to the CSV data
                csvUserData += '\n' + newUserEntry;

                // Send a POST request to update the server's CSV data (you need server-side code for this)
                // Replace this with the actual URL and logic for updating CSV data on the server
                fetch("http://127.0.0.1:6700/update_csv_data", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Adjust the content type as needed
                    },
                    body: JSON.stringify({ username, password }) // Send the data as JSON
                })
                .then(response => {
                    if (response.ok) {
                        // Registration successful
                        document.getElementById("errorMessage").textContent = "Registration successful.";
                    } else {
                        // Registration error
                        document.getElementById("errorMessage").textContent = "Registration failed. An error occurred.";
                    }
                })
                .catch(error => {
                    console.error(error);
                    document.getElementById("errorMessage").textContent = "An error occurred while registering.";
                });
            }
        }
    </script>
</body>
</html>

