var url = 'http://api.icndb.com/jokes/random'; //strona z dowcipami

var button = document.getElementById('get-joke'); //wskazanie przycisku
button.addEventListener('click', function(){    // nasłuchiwanie - klik = pobranie dowcipu
  getJoke();
});

var paragraph = document.getElementById('joke'); //do zmiennej - paragraf "joke" gdzie wyświetla się dowcip

function getJoke() {  // pobranie dowcipu
  var xhr = new XMLHttpRequest(); //nowa instancja 
  xhr.open('GET', url); //request z open
  xhr.addEventListener('load', function(){ //nasłuchiwanie zdarzenia wyst. przy zapytaniu
    var response = JSON.parse(xhr.response); //odpowiedź JSONa idzie do zmiennej response
    paragraph.innerHTML = response.value.joke; //z odpowiedzi wybieramy dowcip i wsadzamy w paragraf
  });
  xhr.send(); //wysłanie zapytania 
}

