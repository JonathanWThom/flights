var apiKey = require('./../.env').apiKey;

function Flights() {}

Flights.checkPrice = function(origin, destination, date, price) {
  var request = {
   "request": {
    "slice": [
     {
      "date": date,
      "destination": destination,
      "origin": origin
     }
    ],
    "passengers": {
     "adultCount": 1
    }
   }
 };
  $.ajax({
     type: "POST",
     url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=" + apiKey,
     contentType: 'application/json',
     dataType: 'json',
     data: JSON.stringify(request),
     success: function (data) {
      //Once we get the result you can either send it to console or use it anywhere you like.
      console.log(JSON.stringify(data));
    },
      error: function(){
       //Error Handling for our request
       alert("Access to Google QPX Failed.");
     }
    });
};

exports.flightsModule = Flights;
