$.get('https://swapi-api.hbtn.io/api/films/?format=json', (response) => {
  $('ul#list_movies').append(...response.map(movie => `<li>${movie.title}</li>`));
});
