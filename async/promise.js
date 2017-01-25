// function doWork(data, callback) {
//   callback('done');
//   callback('donedonedone');
// }
//
// function doWorkPromise(data) {
//   return new Promise(function(resolve, reject){
//     reject('everything broked!');
//     // reject({
//     //   error: 'something bad happened'
//     // });
//   });
// }
//
// doWorkPromise('some data').then(function (data){
//   console.log(data);
// }, function (error) {
//   console.log(error);
// })
var request = require('request');


function getWeather(location){
  var encodedLocation = encodeURIComponent(location);
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&APPID=7c23451bef40ff81c04116a78e333caf';

  return new Promise(function(resolve, reject){

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

getWeather('san francisco').then(function(currentWeather) {
  console.log(currentWeather);
}, function(error){
  console.log(error);
});
