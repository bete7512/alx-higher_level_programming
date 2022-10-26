$.get('https://swapi-api.hbtn.io/api/films/?format=json', (response) => {
  $('UL#list_movies').append(...response.results.map(movie => `<li>${movie.title}</li>`));
});
