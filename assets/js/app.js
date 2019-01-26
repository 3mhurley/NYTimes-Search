// API Key: ifxosl5pYkbjEth9gms8XcOR0okRrt58

// Create Articles
var printArt = function(param) {

    $('#movies-view').empty();
    // Rating
    $('#movies-view').append(`<p> Headline: ${JSON.stringify(param.headline.main)} </>`);
    // Released
    $('#movies-view').append(`<p> Publish Date: ${JSON.stringify(param.pub_date)} Word Count: ${JSON.stringify(param.word_count)} </>`);
    // Image
    $('#movies-view').append(`<p> Abstract: ${JSON.stringify(param.abstract)} </>`);

}


// JQuery

$(document).ready(function() {

    // API Query

    var host = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    var apiKey = "api-key=ifxosl5pYkbjEth9gms8XcOR0okRrt58";
    var dateStart = "&begin_date=" + "19690719"; //YYYYMMDD
    var dateEnd = "&end_date" + "19690721"; //YYYYMMDD
    var sort = "&sort=" + "oldest";
    var query = "&q=" + "moon+landing";

    var queryURL = host + apiKey + query + dateStart + dateEnd + sort;

    var num = 1;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(api) {

        console.log(api.response.docs);
        // var results = api.response.docs;
        // api.response.docs.forEach((val,i) => {
        //     console.log(api.response.docs[i].headline.main);
        //     console.log(api.response.docs[i].pub_date);
        //     console.log(api.response.docs[i].word_count);
        //     console.log(api.response.docs[i].abstract);

        // });

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