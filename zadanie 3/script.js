var url = 'https://restcountries.eu/rest/v1/name/';  //url
var countriesList = $('#countries');                //zmienna, kraje

$('#search').click(searchCountries); // do id search przypisujemy żądanie searchCountries

function searchCountries() { // funkcja wyszukiwania
 	var countryName = $('#country-name').val(); //przyporządkowanie nazwy wpisanej przez usera do countryName
if(!countryName.length) countryName = 'Poland'; //dodatkowo jeśli pole jest puste to z automatu wskakuje PL
    
$.ajax({ //pobranie danych
  		url: url + countryName, //url srony + nazwa wpisana przez usera
  		method: 'GET', // pobierz
  		success: showCountriesList //tutaj wrzucony wynik
  	});
}

function showCountriesList(resp) { // funkcja pok. listę krajów
  	countriesList.empty(); //ewentualne wyczyszczenie listy po wcześniejszym wyszukiwaniu. par. resp obiekt json przełany metodą ajax?
resp.forEach(function(item) { // na tablicy, przefiltrowanie resp ( metoda forEach)
   	$('<li>').text(item.name).appendTo(countriesList); //wpada nowy element
});

}

