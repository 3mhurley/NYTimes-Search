// API Key: ifxosl5pYkbjEth9gms8XcOR0okRrt58

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


    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        console.log(response);

        

    });


});