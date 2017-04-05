import redis from 'redis';
import bluebird from 'bluebird';
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const redisServer = process.env.REDIS_IP || '127.0.0.1';

const client = redis.createClient({
  host: redisServer,
  port: 6379,
});
console.log('Server conneting to ', redisServer);

const monitor = () => {
  client
    .monitorAsync((err, res) => err + res)
    .catch(err => console.log(err))
    .then(res => console.log('Entering monitoring mode.'));
  client.on('monitor', (time, args) => {
    console.log(time + ': ' + args, redisClient.server_info.connected_clients);
  });
};

// uncommnet below to log redis
process.env.REDIS_IP || monitor();

export default client