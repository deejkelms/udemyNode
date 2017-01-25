// weatherApiKey = 7c23451bef40ff81c04116a78e333caf
var weather = require('./weather.js');
var location = require('./location.js');

// setup yargs to have a --location or -l arguments
var argv = require('yargs')
    .option('location', {
      alias: 'l',
      describe: 'Location to fetch weather for',
      type: 'string'
    })
    .help('help')
    .argv;

// if location provided
  if (typeof argv.l === 'string' && argv.l.length > 0) {
    console.log('Location provided');
    weather(argv.l).then(function (currentWeather){
      console.log(currentWeather);
    }).catch(function(error){
      console.log(error);
    })
  } else {
    console.log('No location given');

    location().then(function(loc){
      return weather(loc.city);
    }).then(function (currentWeather){
      console.log(currentWeather);
    }).catch(function (error){
      console.log(error);
    });
  }
