
var twitter = require('tweeter');
tweeter = new twitter({
    consumer_key: 'GVZxuxvfZgLN7CKMvWxBsoRjd',
    consumer_secret: 'XydQK4kQKCbP5rjzSmDd4IREgvfZsN6cYlYOkeaGMouJzPxGe9',
    access_token_key: '885116957871230976-4o3TpXwlKpZ9255ksSTq2iKWJ98ZJkm',
    access_token_secret: 'aG8og132X4W7IyVTvjI6le3dZbo3uIxUyOHnQM4r6N5DD'

});

var count = 0, util = require('util');
twitter.stream('filter', {track: 'love'}, function(stream){
    stream.on('data',function(data){
        console.log(util.inspect(data));
        stream.destroy();
        process.exit(0);
    });
});