import express from "express"
import cors from "cors"

const app = express()
const port = process.env.PORT || 9001

app.use(cors())

// app.get('*', (req, res) => res.status(404).send('404'));
// app.listen(port);
// console.log('Server conneting to ', redisServer);
// console.log('Server started! At http://localhost:' + port);
export default app
