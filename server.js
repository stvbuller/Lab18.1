var request = require('request');
var cheerio = require('cheerio');


request('https://www.reddit.com/', function (error, response, html) {
  var $ = cheerio.load(html);
  var result = [];
  $(".title").each(function(i, element){

    //scrape some stuff, put it in an object and add it to the result array

    var title = $(this).text();
    var link = $(element).children().attr('href')

    result.push({
      title: title,
      link: link
    })

    });
  console.log(result);
});

// request([YOUR WEBSITE HERE], function (error, response, html) {
//   var $ = cheerio.load(html);
//   var result = [];
//   $([YOUR SELECTOR HERE]).each(function(i, element){

//     //scrape some stuff, put it in an object and add it to the result array

//     });
//   console.log(result);
// });


// request("http://www.cnn.com/", function (error, response, html) {
//  var $ = cheerio.load(html);
//  var result = [];
//  $('.cd__headline-text').each(function(i, element){

//    var title = $(this).text();
//    var link = $(element).children().attr('href');

//    result.push({
//      title: title,
//      link: link
//    })



//    });
//  console.log(result);
// });
