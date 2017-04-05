import app from './express.js';
import redisClient from './redis.js';

import getAllData from '../routes/getAllData.js';
import getAllKeys from '../routes/getAllKeys.js';
import getUuidDetailsURL from '../routes/getUuidDetailsURL.js';

const port = process.env.PORT || 9001;

// Define different routes

getUuidDetailsURL(`users`);
getUuidDetailsURL(`hcf`);
getUuidDetailsURL(`kits`);
getUuidDetailsURL(`bans`);
getUuidDetailsURL(`faction`);

getAllKeys(`users`);
getAllKeys(`hcf`);
getAllKeys(`kits`);
getAllKeys(`bans`);
getAllKeys(`faction`);

getAllData(`users`);

app.get('*', (req, res) => res.status(404).send('404 Page'));
app.listen(port);

console.log('Server started! At http://localhost:' + port);
