var Flights = require('./../js/flights.js').flightsModule;

function displayPrice(price) {
  $('#showFlights').text(price);
  // this will change to show more parameters
}

$(document).ready(function(){
  $('#getFlights').click(function(){
    var origin = $('#origin').val();
    var destination = $('#destination').val();
    var date = $('#date').val();
    var passengers = $('#passengers').val();
    Flights.checkPrice(origin, destination, date, passengers, displayPrice);
  });
});
