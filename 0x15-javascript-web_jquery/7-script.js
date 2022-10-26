$.get('https://swapi-api.hbtn.io/api/people/5/?format=json', (response) => {
  $('div#character').text(response.name);
});
