var request = require('request');

module.exports = function(location) {

return new Promise(function(resolve, reject){

  var encodedLocation = encodeURIComponent(location);
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&APPID=7c23451bef40ff81c04116a78e333caf';

  if (!location) {
    return reject('No location provided');
  }
    request({
      url: url,
      json: true
    }, function (error, response, body){
      if (error) {
        reject('Unable to fetch weather.');
      } else {
        // console.log(JSON.stringify(body, null, 4));
        resolve('It\'s '+body.main.temp+ ' in '+body.name+ '!');
      }
    });
  });
}
