var Flights = require('./../js/flights.js').flightsModule;

function displayPrice(price, flightNumber, airline, departure, duration, cabin) {
  $('#showFlights').show();
  $('#showFlights tbody').append('<tr><td>' + price + '</td><td>' + flightNumber + '</td><td>' + airline + '</td><td>' + departure + '</td><td>' + duration + '</td><td>' + cabin + '</td></tr>');

}

$(document).ready(function(){
  $('select').material_select();
  $('#getFlights').click(function(){
    var origin = $('#origin').val();
    var destination = $('#destination').val();
    var date = $('#date').val();
    var passengers = $('#passengers').val();
    Flights.checkPrice(origin, destination, date, passengers, displayPrice);
  });

  $('#reset').click(function(){
    location.reload();
  });
});
