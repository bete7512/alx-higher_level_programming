$('document').ready(() => {
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', (response) => {
    $('DIV#hello').text(response.hello);
  });
});
