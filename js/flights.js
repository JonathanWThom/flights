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
      for (i = 0; i < 20; i++) {
        var price = JSON.stringify(data.trips.tripOption[i].saleTotal)
        console.log(JSON.stringify(data.trips.tripOption[i].saleTotal));
        console.log(JSON.stringify(data.trips.tripOption[i].slice[0].segment[0].flight.number));
        console.log(JSON.stringify(data.trips.tripOption[i].slice[0].segment[0].flight.carrier));
        console.log(JSON.stringify(data.trips.tripOption[i].slice[0].segment[0].leg[0].departureTime));
        console.log(JSON.stringify(data.trips.tripOption[i].slice[0].segment[0].leg[0].duration));
        console.log(JSON.stringify(data.trips.tripOption[i].slice[0].segment[0].cabin));
        displayPrice(price);
      }
    },
    error: function(){
      alert("Access to Google QPX Failed.");
    }
  });
};

exports.flightsModule = Flights;
