document.querySelector('form').addEventListener('submit', (event) => {

  event.preventDefault();

  const searchTerm = document.querySelector('input').value;

  const url = `https://www.google.com/search?q=${searchTerm}`;

  window.open(url, '_blank');

});

/*Reslove Issue With Google Search Results And JavaScript*/
