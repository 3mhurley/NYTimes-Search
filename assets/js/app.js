// API Key: ifxosl5pYkbjEth9gms8XcOR0okRrt58

// Create Articles
var printArt = function(param) {

    
    // Rating
    $('#articles').append(`<p> Headline: ${JSON.stringify(param.headline.main)} </>`);
    // Released
    $('#articles').append(`<p> Publish Date: ${JSON.stringify(param.pub_date)} Word Count: ${JSON.stringify(param.word_count)} </>`);
    // Image
    $('#articles').append(`<p> Abstract: ${JSON.stringify(param.abstract)} </>`);

    $('#articles').append(`<p> ___________________________- </>`);

}


// JQuery

$(document).ready(function() {

$("#searchBtn").on("click", function() {

        // API Query

        var host = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
        var apiKey = "api-key=ifxosl5pYkbjEth9gms8XcOR0okRrt58";
        var dateStart = "&begin_date=" + $('#start').val().trim(); //YYYYMMDD
        var dateEnd = "&end_date" + $('#end').val().trim(); //YYYYMMDD
        var sort = "&sort=" + "relevance";
        var query = "&q=" + $('#searchTerm').val().trim();
    
        var queryURL = host + apiKey + query + sort;
    
        var num = $('#numArt').val().trim();
        console.log(num);
    
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(api) {
    
            $('#articles').empty();

            for (let i = 0; i < num; i++) {
                const element = api.response.docs[i];
                console.log(api.response.docs[i].headline.main);
                console.log(api.response.docs[i].pub_date);
                console.log(api.response.docs[i].word_count);
                console.log(api.response.docs[i].abstract);
    
                printArt(element);
            }
    
    
        });

});




});