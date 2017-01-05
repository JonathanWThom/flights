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
        if (data.trips.tripOption.length === i) {
          break;
        }
        var usdPrice = data.trips.tripOption[i].saleTotal;
        var price = usdPrice.replace('USD', '$');
        var flightNumber = data.trips.tripOption[i].slice[0].segment[0].flight.number;
        var airline = data.trips.tripOption[i].slice[0].segment[0].flight.carrier;
        var departure = data.trips.tripOption[i].slice[0].segment[0].leg[0].departureTime;
        var departureArray = departure.split("");
        departureArray.pop();
        departureArray.pop();
        departureArray.pop();
        departureArray.pop();
        departureArray.pop();
        departureArray.pop();
        departureArray.splice(10, 1, " ");
        departure = departureArray.join("");
        var duration = data.trips.tripOption[i].slice[0].duration;
        var cabin = data.trips.tripOption[i].slice[0].segment[0].cabin;
        if (flightNumbers.includes(flightNumber)) {
          //do nothing
        } else {
          displayPrice(price, flightNumber, airline, departure, duration, cabin);
        }
        flightNumbers.push(flightNumber);
      }
    },
    error: function(data){
      $("#error").text(data.responseJSON.error.errors[0].message + " Please retry.");
    }
  });
};

exports.flightsModule = Flights;
