// Progression 1: create a function and fetch the api using axios
let apiUrl =
  'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=2dc3086099a3a76bbe14e3cac5ddebdd';

function gettingData() {
  fetch(apiUrl)
    .then(function (result) {
      return result.json();
    })
    .then(function (response) {
      // console.log('Successful fetch', response.articles);
      let spreadData = [...response.articles];
      display(spreadData);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
gettingData();

function display(data) {
  let container = document.getElementById('content');
  data.forEach(function (items, index) {
    container.innerHTML += `
        <div class="items">
          <h1>${items.title}</h1>
          <img src='${items.image}'/>
          <p>${items.content}<p>
        </div>
    `;
  });
}
