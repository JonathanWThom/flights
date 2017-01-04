var Flights = require('./../js/flights.js').flightsModule;

function displayPrice(price) {
  $('#showFlights').text(price);
}

$(document).ready(function(){
  $('#getFlights').click(function(){
    var origin = $('#origin').val();
    var destination = $('#destination').val();
    var date = $('#date').val();
    Flights.checkPrice(origin, destination, date, displayPrice);
  });
});
