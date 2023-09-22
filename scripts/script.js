// Define your movie catalog with genre information
const movieCatalog = [
    { title: "Movie 1", id: "movie1", genre: "Action" },
    { title: "Movie 2", id: "movie2", genre: "Drama" },
    { title: "Movie 3", id: "movie3", genre: "Comedy" },
    { title: "Movie 4", id: "movie4", genre: "Action" },
    { title: "Movie 5", id: "movie5", genre: "Drama" },
    { title: "Movie 6", id: "movie6", genre: "Comedy" },
    { title: "Movie 7", id: "movie7", genre: "Romance" },
    { title: "Movie 8", id: "movie8", genre: "Action" },
    { title: "Movie 9", id: "movie9", genre: "Horror" },
    { title: "Movie 10", id: "movie10", genre: "Drama" },
    { title: "Movie 11", id: "movie11", genre: "Comedy" },
    { title: "Movie 12", id: "movie12", genre: "Action" },
    { title: "Movie 13", id: "movie13", genre: "Adventure" },
    { title: "Movie 14", id: "movie14", genre: "Horror" },
    { title: "Movie 15", id: "movie15", genre: "Action" },
    { title: "Movie 16", id: "movie16", genre: "Comedy" },
    { title: "Movie 17", id: "movie17", genre: "Drama" },
    { title: "Movie 18", id: "movie18", genre: "Horror" },
    { title: "Movie 19", id: "movie19", genre: "Action" },
    { title: "Movie 20", id: "movie20", genre: "Romance" }
];

// Function to populate the movie select element
function populateMovieSelect() {
    const fieldset = document.querySelector("#movie-form fieldset");
    movieCatalog.forEach(movie => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "movies[]";
        checkbox.value = movie.id;
        const label = document.createElement("label");
        label.textContent = movie.title;
        fieldset.appendChild(checkbox);
        fieldset.appendChild(label);
        fieldset.appendChild(document.createElement("br"));
    });
}

// Function to recommend movies based on user selections
function recommendMovies(selectedMovies) {
    // Create a dictionary to count genres in selected movies
    const genreCounts = {};

    selectedMovies.forEach(selectedMovie => {
        const movie = movieCatalog.find(movie => movie.id === selectedMovie);
        if (movie) {
            const genre = movie.genre;
            if (genreCounts[genre]) {
                genreCounts[genre]++;
            } else {
                genreCounts[genre] = 1;
            }
        }
    });

    // Find the most frequently occurring genre
    let maxGenre = null;
    let maxCount = 0;

    for (const genre in genreCounts) {
        if (genreCounts[genre] > maxCount) {
            maxGenre = genre;
            maxCount = genreCounts[genre];
        }
    }

    // Recommend movies of the most frequent genre
    const recommendedMovies = movieCatalog.filter(movie => movie.genre === maxGenre && !selectedMovies.includes(movie.id));

    return recommendedMovies;
}

// Function to display recommended movies
function displayRecommendedMovies(recommendedMovies) {
    const recommendationsList = document.getElementById("recommendations");
    recommendationsList.innerHTML = ""; // Clear previous recommendations
    recommendedMovies.forEach(movie => {
        const listItem = document.createElement("li");
        listItem.textContent = movie.title;
        recommendationsList.appendChild(listItem);
    });
}

// Event listener for the form submission
document.getElementById("movie-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const selectedMovies = Array.from(document.querySelectorAll("#movie-form input[type=checkbox]:checked")).map(checkbox => checkbox.value);
    if (selectedMovies.length !== 5) {
        alert("Please select exactly 5 movies.");
    } else {
        // Recommend movies based on the user's selections
        const recommendedMovies = recommendMovies(selectedMovies);

        // Display the recommended movies on the page
        displayRecommendedMovies(recommendedMovies);
    }
});

// Call the function to populate the movie checkboxes
populateMovieSelect();
