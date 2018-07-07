function buildQuery() {
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "8acf31a68f074bf0aaf11a1bf83f3ab2",
        'q': "Sacramento",
        'begin_date': "20000101",
        'end_date': "20100101"
    });

    $.ajax({
        url: queryUrl,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        throw err;
    });


}