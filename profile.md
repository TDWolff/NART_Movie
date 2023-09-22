---
permalink: /profile
title: Profile
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
    <!-- Add your CSS styles here for better presentation -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Movie Selection Section -->
    <section id="movie-selection">
        <h1>Select Your 5 Favorite Movies</h1>
        <form id="movie-form">
            <fieldset>
                <legend>Movies:</legend>
                <!-- JavaScript will populate this list -->
            </fieldset>
            <button type="submit">Save Selection</button>
        </form>
    </section>

    <!-- Recommended Movies Section -->
    <section id="recommended-movies">
        <h2>Recommended Movies</h2>
        <ul id="recommendations">
            <!-- JavaScript will populate this list -->
        </ul>
    </section>

    <!-- Include your JavaScript file for movie catalog handling -->
    <script src="scripts/script.js"></script>
</body>
</html>
