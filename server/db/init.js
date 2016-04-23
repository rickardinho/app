var url = require('url');
var redis = require('redis');
var bluebird = require('bluebird');

bluebird.promisifyAll(redis);

var dbURL = process.env.PRODUCTION ? "redis://localhost:6379" : process.env.REDISCLOUD_URL;

var parsedURL = url.parse(dbURL);
var client = redis.createClient(parsedURL.port, parsedURL.hostname, { no_ready_check: true });

client.auth(parsedURL.auth.split(':')[1]);

client.on('error', (err) => {
    throw new Error(err);
});

module.exports = client;
