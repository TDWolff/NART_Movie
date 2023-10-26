---
permalink: /profile
title: Profile
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
    <!-- Add your CSS styles here for better presentation -->
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            background-image: url('images/webbackground.png');
            background-size: cover;
            overscroll-behavior: none;
        }
    </style>
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


<script>
    // Function to search for movies using the OMDB API
    function searchMovies() {
        // Get user input
        const movieInput = document.getElementById("movieInput");
        const query = movieInput.value;

        // Replace 'YOUR_OMDB_API_KEY' with your actual OMDB API key
        const apiKey = '85057df';
        const apiUrl = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

        // Clear previous results
        const movieResults = document.getElementById("movieResults");
        movieResults.innerHTML = '';

        // Fetch data from the OMDB API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Process and display movie data
                if (data.Response === "True" && data.Search) {
                    data.Search.forEach(movie => {
                        const movieElement = document.createElement("div");
                        movieElement.classList.add("movie-card"); // Add CSS class for styling
                        // Create and append elements like movie title, poster, year, etc.
                        movieElement.innerHTML = `<h3>${movie.Title}</h3><img src="${movie.Poster}" alt="${movie.Title}"><p>Year: ${movie.Year}</p>`;
                        movieResults.appendChild(movieElement);
                    });
                } else {
                    // Handle error or no results
                    movieResults.innerHTML = 'No movies found or an error occurred.';
                }
            })
            .catch(error => {
                console.error(error);
                movieResults.innerHTML = 'An error occurred while fetching data.';
            });
    }
</script>
</body>
</html>
