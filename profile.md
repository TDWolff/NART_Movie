---
permalink: /recommendations
title: Movie Recommendation System
---

<html>
<head>
  <title>Movie Recommendation System</title>
    <style>
        body {
            background-image: url('images/webbackground.png');
            background-size: cover;
            overscroll-behavior: none;
        }
    </style>
<style>
    body {
        background-image: url('images/webbackground.png');
        background-size: cover;
        overscroll-behavior: none;
    }
</style>
</head>
<body>
  <h1>Movie Recommendation System</h1>
  <p>Enter 5 movie titles:</p>
<div>
  <input type="text" id="movie1" placeholder="Movie 1">
</div>
<div>
  <input type="text" id="movie2" placeholder="Movie 2">
</div>
<div>
  <input type="text" id="movie3" placeholder="Movie 3">
</div>
<div>
  <input type="text" id="movie4" placeholder="Movie 4">
</div>
<div>
  <input type="text" id="movie5" placeholder="Movie 5">
</div>
<div>
  <button onclick="getRecommendations()">Get Recommendations</button>
</div>

  <h2>Recommended Movies:</h2>
  <ul id="recommendedMovies"></ul>

  <script>
    function getRecommendations() {
      const apiKey = '7d48fb5014e3bca66e0af638d07daeb5';
      const movies = [
        document.getElementById('movie1').value,
        document.getElementById('movie2').value,
        document.getElementById('movie3').value,
        document.getElementById('movie4').value,
        document.getElementById('movie5').value,
      ];

      const recommendedMovies = document.getElementById('recommendedMovies');
      recommendedMovies.innerHTML = '';

      // Search for each movie and get their IDs
      const movieIDs = movies.map((movie) => {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movie)}`)
          .then((response) => response.json())
          .then((data) => data.results[0]?.id);
      });

      // Get recommendations for each movie
      Promise.all(movieIDs)
        .then((ids) => {
          ids.forEach((id) => {
            if (id) {
              return fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                  data.results.slice(0, 5).forEach((movie) => {
                    const li = document.createElement("div");
                    li.innerHTML = `<h3>${movie.title}</h3><img src="${movie.Poster}" alt="${movie.title}">`;
                    recommendedMovies.appendChild(li);

/**
                        movieElement.classList.add("movie-card"); // Add CSS class for styling
                        // Create and append elements like movie title, poster, year, etc.
                        movieElement.innerHTML = `<h3>${movie.Title}</h3><img src="${movie.Poster}" alt="${movie.Title}"><p>Year: ${movie.Year}</p>`;
                        movieResults.appendChild(movieElement);
                        **/


                  });
                });
            }
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  </script>
</body>
</html>
