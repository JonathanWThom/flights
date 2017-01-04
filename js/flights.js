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
      var flightNumbers = [];
      for (i = 0; i < 20; i++) {
        console.log('loop!');
        if (data.trips.tripOption.length === i) {
          break;
        }
        var price = JSON.stringify(data.trips.tripOption[i].saleTotal);
        var flightNumber = JSON.stringify(data.trips.tripOption[i].slice[0].segment[0].flight.number);
        var airline = JSON.stringify(data.trips.tripOption[i].slice[0].segment[0].flight.carrier);
        var departure = JSON.stringify(data.trips.tripOption[i].slice[0].segment[0].leg[0].departureTime);
        var duration = JSON.stringify(data.trips.tripOption[i].slice[0].segment[0].leg[0].duration);
        var cabin = JSON.stringify(data.trips.tripOption[i].slice[0].segment[0].cabin);

        if (flightNumbers.includes(flightNumber)) {
          //do nothing
        } else {
          displayPrice(price, flightNumber, airline, departure, duration, cabin);
        }
        flightNumbers.push(flightNumber);
      }
    },
    error: function(){
      alert("Access to Google QPX Failed.");
    }
  });
};

exports.flightsModule = Flights;
