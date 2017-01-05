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

  $.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrKey + '&tags=' + location + '&per_page=1&page=1&format=json&nojsoncallback=1')
    .then(function(response) {
      console.log(response);
      farmId = response.photos.photo[0].farm;
      serverId = response.photos.photo[0].server;
      photoId = response.photos.photo[0].id;
      secret = response.photos.photo[0].secret;
      displayImage(farmId, serverId, photoId, secret);
    }).fail(function(error) {
      //do nothing
    });
};

exports.imageModule = Image;
