var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function() {

  return new Promise(function(resolve, reject){

    request({
      url: url,
      json: true
    }, /* callback function! */function (error, response, body){
        if (error) {
          reject('Unable to fetch location.');
        } else {
          // console.log(JSON.stringify(body, null, 4));
          resolve(body);
        }
      });
  });
}
