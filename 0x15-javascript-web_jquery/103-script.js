$('document').ready(()=>{
    $('INPUT#btn_translate').click(translate);
    $('INPUT#language_code').focus(()=>{
      $(this).keydown((e)=> {
        if (e.keyCode === 13) {
          translate();
        }
      });
    });
  });
  
  const translate =()=>{
    const url = 'https://www.fourtonfish.com/hellosalut/?';
    $.get(url + $.param({ lang: $('INPUT#language_code').val() }), (data)=>{
      $('DIV#hello').html(data.hello);
    });
  }
  