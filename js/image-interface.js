var Image = require('./../js/image.js').imageModule;

function displayImage(farmId, serverId, photoId, secret) {
  var link = "https://farm" + farmId + ".staticflickr.com/" + serverId + "/" + photoId + "_" + secret + "_m.jpg";
  $('#showImage').html("<img src='" + link + "'>");
}

$(document).ready(function(){
  $('#getFlights').click(function() {
    var destination = $('#destination').val();
    Image.findImage(destination, displayImage);
  });
});
