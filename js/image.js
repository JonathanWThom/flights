var flickrKey = require('./../.env').flickrKey;

function Image() {}

Image.findImage = function(destination, displayImage) {
  var location;
  if (destination === 'PSP') {
    location = "Joshua Tree";
  } else if (destination === 'SMF') {
    location = "Yosemite";
  } else if (destination === 'YVR') {
    location = "Squamish";
  } else if (destination === 'LAS') {
    location = "Red Rocks";
  } else if (destination === "MTY") {
    location = "El Potrero Chico";
  }

  $.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrKey + '&tags=' + location + '&sort=interestingness-desc&per_page=3&page=1&format=json&nojsoncallback=1')
    .then(function(response) {
      for (i = 0; i < 3; i++) {
        var farmId = response.photos.photo[i].farm;
        var serverId = response.photos.photo[i].server;
        var photoId = response.photos.photo[i].id;
        var secret = response.photos.photo[i].secret;
        var number;
        if (i === 0 ) {
          number = "one";
        } else if (i === 1) {
          number = "two";
        } else if (i === 2) {
          number = "three";
        }
        console.log(number);
        displayImage(farmId, serverId, photoId, secret, number);

      }
      $('.carousel.carousel-slider').carousel({full_width: true});
    }).fail(function(error) {
      //do nothing
    });
};

exports.imageModule = Image;
