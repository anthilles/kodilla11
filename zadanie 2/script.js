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

    if (textTweet.length > 140) {
    getQuote();
} else {
    var tweet = tweetLink + encodeURIComponent(textTweet);
    $('.quote').text(quoteText);
    $('.author').text("Autor: " + quoteAuthor);
    $('.tweet').attr('href', tweet);
}
           
}

$(document).ready(function() {
    getQuote();
    $('.trigger').click(function() {
        getQuote();
    })
});

