---
permalink: /profile
title: Profile
---

# Movie Recommendations
Enter 5 of your favorite movies below:
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
    <div>
    <input type="text" id="movieInput1" placeholder="Enter a movie title">
    <button onclick="searchMovies()">Search</button>
    </div>
    <div>
    <input type="text" id="movieInput2" placeholder="Enter a movie title">
    <button onclick="searchMovies()">Search</button>
    </div>
    <div>
    <input type="text" id="movieInput3" placeholder="Enter a movie title">
    <button onclick="searchMovies()">Search</button>
    </div>
    <div>
    <input type="text" id="movieInput4" placeholder="Enter a movie title">
    <button onclick="searchMovies()">Search</button>
    </div>
    <div>
    <input type="text" id="movieInput5" placeholder="Enter a movie title">
    <button onclick="searchMovies()">Search</button>
    </div>


<script>
    // Function to search for movies using the OMDB API
    function movieRec() {

        //API URL and key constants
        const apiKey = '85057df';

        // Get user input & search for movie
        var dateList = [];
        for (let i = 0; i < 5; i++){
            var movieInput = document.getElementById('movieInput'+i);
            var query = movieInput.value;
            var apiUrl = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;
            // Fetch data from the OMDB API
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Process and display movie data
                    if (data.Response === "True" && data.Search) {
                        data.Search.forEach(movie => {
                            // Add date to datelist
                            datelist.push(movie.Year);
                        });
                    } else {
                        // Handle error or no results
                        movieResults.innerHTML = 'No movies found or an error occurred.';
                    }
                })
                .catch(error => {
                    // Handle errors with the search
                    console.error(error);
                    movieResults.innerHTML = 'An error occurred while fetching data.';
                });   
        }
    }
</script>
</body>
</html>
