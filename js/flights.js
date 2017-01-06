var apiKey = require('./../.env').apiKey;

function Flights() {}

function airlineLink(airline) {
  var link;
  if (airline === "AS") {
    link = "<a href='https://www.alaskaair.com'>Alaska Airlines</a>";
  } else if (airline === "AA") {
    link = "<a href='https://www.aa.com'>American Airlines</a>";
  } else if (airline === "UA") {
    link = "<a href='https://www.united.com'>United Airlines</a>";
  } else if (airline === "WN") {
    link = "<a href='https://www.southwest.com'>Southwest Airlines</a>";
  } else if (airline === "DL") {
    link = "<a href='https://www.delta.com'>Delta Airlines</a>";
  } else if (airline === "AC") {
    link = "<a href='https://www.aircanada.com'>Air Canada</a>";
  } else if (airline === "VX") {
    link = "<a href='https://www.virginamerica.com'>Virgin America</a>";
  } else if (airline === "AM") {
    link = "<a href='https://www.aeromexico.com'>Air Mexico</a>";
  } else {
    link = airline;
  }
  return link;
}

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
        var link = airlineLink(airline);
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
          displayPrice(price, flightNumber, link, departure, duration, cabin);
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
