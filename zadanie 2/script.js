var prefix = "https://cors-anywhere.herokuapp.com/";
var tweetLink = "https://twitter.com/intent/tweet?text="; //linki twittera
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"; //linki cytatów

function getQuote(){  //skrócona metoda $.ajax()
    $.getJSON(prefix + quoteUrl, createTweet);   // pobranie cytatu i wsadzenie go do newTweet
    $.ajaxSetup({ cache: false });
}

function createTweet(input){ //utworzeny zostaje link z tweetami i podpięty pod przycisk
    var data = input[0];
    var quoteText = $(data.content).text().trim(); //kod html --> wyciągnięty tekst --> ucinanie spacji na początku/końcu
    var quoteAuthor = data.title;
    
    if (!quoteAuthor.length) { // quoteAuthor.length = 0 / false, zanegowanie ! daje true. jeśli pole autor jest puste (ma zero znaków to:)
        quoteAuthor = "Nieznany autor"
    }
    
    var textTweet = "Cytat dnia: " + quoteText + "Autor: " + quoteAuthor;

    if (tweetText.length > 140) {
    // sprawdzenie długości cytatu, jeśli dłuższy niż 140 znaków to wywołujemy ponownie funkcję qetQuote;
        getQuote;
    } else {
        var tweet = tweetLink + encodeURIComponent(tweetText); //link + text
        $('.quote').text(quoteText);  // element gdzie wyświetlamy cytat
        $('.author').text("Author: " + quoteAuthor); // element gdzie pojawia się autor
        $('.tweet').attr('href', tweet); // wybieramy element z klasą tweet i zmieniamy atrybut href na url tweeta
    }
    
    $(document).ready(function() {
    getQuote();
    $('.trigger').click(function() {
        getQuote();
    })
});
        
}

