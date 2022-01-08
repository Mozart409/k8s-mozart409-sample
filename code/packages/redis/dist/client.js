"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.subscribe = exports.publish = void 0;
var ioredis_1 = __importDefault(require("ioredis"));
var redis = new ioredis_1["default"](process.env.REDIS_URL);
function publish(_a) {
    var message = _a.message, channel = _a.channel;
    // Message can be either a string or a buffer
    redis.publish(channel, JSON.stringify(message));
    console.log('Published %s to %s', message, channel);
}
exports.publish = publish;
function subscribe() {
    redis.subscribe('dogs', 'cats', function (err, count) {
        if (err) {
            // Just like other commands, subscribe() can fail for some reasons,
            // ex network issues.
            console.error('Failed to subscribe: %s', err.message);
        }
        else {
            // `count` represents the number of channels this client are currently subscribed to.
            console.log("Subscribed successfully! This client is currently subscribed to ".concat(count, " channels."));
        }
    });
    redis.on('message', function (channel, message) {
        console.log("Received ".concat(message, " from ").concat(channel));
    });
}
exports.subscribe = subscribe;
