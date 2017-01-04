var apiKey = require('./../.env').apiKey;

function Flights() {}

Flights.checkPrice = function(origin, destination, date, passengers, displayPrice) {
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
     "adultCount": passengers
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
      // trips.tripOption[0].saleTotal;
      //Once we get the result you can either send it to console or use it anywhere you like.
      data.trips.tripOption.forEach(function(tripOption) {
        console.log(JSON.stringify(tripOption.saleTotal));

        // for 1-10
      });

      // console.log(JSON.stringify(data.trips.tripOption[0].saleTotal));
      // console.log(JSON.stringify(data.trips.tripOption[0].slice[0].segment[0].flight.number));
      // console.log(JSON.stringify(data.trips.tripOption[0].slice[0].segment[0].flight.carrier));
      // console.log(JSON.stringify(data.trips.tripOption[0].slice[0].segment[0].leg[0].departureTime));
      // console.log(JSON.stringify(data.trips.tripOption[0].slice[0].segment[0].leg[0].duration));
      // console.log(JSON.stringify(data.trips.tripOption[0].slice[0].segment[0].cabin));
    },
      error: function(){
       //Error Handling for our request
       alert("Access to Google QPX Failed.");
     }
    });
};

exports.flightsModule = Flights;
