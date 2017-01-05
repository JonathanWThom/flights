var Image = require('./../js/image.js').imageModule;

function displayImage(farmId, serverId, photoId, secret, number) {
  var link = "https://farm" + farmId + ".staticflickr.com/" + serverId + "/" + photoId + "_" + secret + "_q.jpg";
  // $('#showImage').append("<img id='photo-size' src='" + link + "'>");

  $('.carousel.carousel-slider').append("<a class='carousel-item' href='#" + number + "!'><img src='" + link + "'></a>");

  var imageTest = "<a class='carousel-item' href='#" + number + "!'><img id='photo-size' src='" + link + "'></a>";
  console.log(imageTest);

}

$(document).ready(function(){

  $('#getFlights').click(function() {
    var destination = $('#destination').val();
    Image.findImage(destination, displayImage);

  });
});
