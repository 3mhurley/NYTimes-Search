// API Key: ifxosl5pYkbjEth9gms8XcOR0okRrt58

// Make Card
function name(param) {
    
}

// Create Articles
function printArt(param,iter) {

    $('#articles').append(`<div class='card' id=${iter}></div>`);

    $('#' + iter).append(`<div class="card-header">`);
    $('#' + iter).append(`<div class="card-body">`);

    // Headline
    $('#' + iter).find('div.card-header').append(`<p> Headline: ${JSON.stringify(param.headline.main)} </>`);


    // Abstract
    
    
    if (param.abstract !== 'undefined') {
        $('#' + iter).find('div.card-body').append(`<p> Abstract: ${JSON.stringify(param.abstract)} </>`);
    }
    // Publish Date
    $('#' + iter).find('div.card-body').append(`<p> Publish Date: ${JSON.stringify(param.pub_date)} Word Count: ${JSON.stringify(param.word_count)} </>`);
    
    $('#articles').append(`<br>`);
}


// JQuery

$(document).ready(function() {

$("#searchBtn").on("click", function() {

        // API Query

        var host = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
        var apiKey = "api-key=ifxosl5pYkbjEth9gms8XcOR0okRrt58";

        var sort = "&sort=" + "relevance";
        var query = "&q=" + $('#searchTerm').val().trim();

        var dateStart = "&begin_date=" + $('#start').val().trim() + "0101"; //YYYYMMDD
        var dateEnd = "&end_date" + $('#end').val().trim() + "1231"; //YYYYMMDD
        
    
        var queryURL = host + apiKey + query + sort;

        if ($('#start').val().trim() !== '') {
            queryURL = queryURL + dateStart;
        }
        
        if ($('#end').val().trim() !== '') {
            queryURL = queryURL + dateEnd;
        }
    
        var num = $('#numArt').val().trim();
    
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(api) {
    
            $('#articles').empty();

            for (let i = 0; i < num; i++) {

                const element = api.response.docs[i];
                console.log(element);
   
                printArt(element,i);
            }
    
    
        });

});




});