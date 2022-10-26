$.get('https://swapi-api.hbtn.io/api/people/5/?format=json', (response) => {
  $('DIV#character').text(response.name);
});
