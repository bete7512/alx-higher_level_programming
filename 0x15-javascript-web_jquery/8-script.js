$.get('https://swapi-api.hbtn.io/api/people/5/?format=json', (response) => {
  $('ul#list_movies').append(...response.map(movie => `<li>${movie.title}</li>`));
});
