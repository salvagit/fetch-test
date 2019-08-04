function renderMovie(image, title, year) {
  const movieTpl = document.getElementById("movieCardTpl");

  let movieEl = document.createElement("div");

  movieEl.innerHTML = movieTpl.innerHTML;

  movieEl.querySelector(".card-img-top").src = image;
  movieEl.querySelector(".card-title").innerHTML = title;
  movieEl.querySelector(".card-text").innerHTML = "Year: " + year;

  document.querySelector(".card-columns").appendChild(movieEl);
}

const apiKey = "xxxxxxxx";
const fetchUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;
const searchParam = "s=star";

fetch(`${fetchUrl}&${searchParam}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const results = json.Search;

    for (let index = 0; index < results.length; index++) {
      const movie = results[index];

      renderMovie(movie.Poster, movie.Title, movie.Year);
    }
  });
