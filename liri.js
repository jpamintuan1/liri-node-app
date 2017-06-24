var keys = require('./key.js');
console.log('keys:  ', keys.twitterKeys.consumer_key);
var Twitter = require('twitter');
var client = new Twitter ({
  consumer_key: '7NS4l97zkQiO4nIXeujGuvPKv',
  consumer_secret: 'N8rjeyqKrY3csDAVk1KQFCGsRJ9hCQ679utDSfere7CLtwfHgM',
  access_token_key: '877211336484167680-WuopTS1kmh0rEGc9ix7uDpTYaWnVskB',
  access_token_secret: 'zMJHs3jotvz4iZLrtgcEOhtcSwluTPLHEEeLwRU00qdXL',
});




var userCommand = process.argv[2];

if (userCommand === 'my-tweets'){
	getLastTwentyTweets();
}
else if ( userCommand === 'spotify-this-song'){
	console.log('spotify');
}
else if ( userCommand === 'movie-this'){
	console.log('movie');
}
else if ( userCommand === 'do-what-it-says'){
	console.log('do');
}
else{
	console.log('invalid command');
}

function getLastTwentyTweets() {
	console.log("get last twenty tweets");

	 client.get('statuses/user_timeline', function(error, tweets, response) {
  if(error) throw error;
  // console.log(tweets);  // The favorites. 
  	var tweets = JSON.parse(response.body);  // Raw response object. 
  	// for each (for loop) tweet in the tweets array
  		// console log the tweet's text field
	for ( var i = 0; i < 2; i++ ){
		console.log(tweets[i].text);
	}
}); 
	// format the response and console.log it
}



var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '79472d9f2302495495932ec5c04902fd',
  secret: 'a0e012e4703c45b18f8dabc6f6484093',
});
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
  	console.log('track');
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  
 });

var omdbApi = require('omdb-client');
 
var params = {
    title: 'Terminator',
    year: 2012
}
omdbApi.get(params, function(err, data) {
    // process response... 
});


//`node liri.js spotify-this-song '<song name here>'`
// "Was not able to get command input to work.""

//`node liri.js movie-this '<movie name here>'`

  // * This will output the following information to your terminal/bash window:

  //" Was not able to find imnb API key to connect"
  //" Not able to connect FS"
   