import app from "../services/express.js"
import redisClient from "../services/redis.js"

const getUuidDetailsURL = (type, uuid) => {
  app.get(`/api/${type}/:useruuid`, (req, res) => {
    res.setHeader("header", "application/json")
    res.setHeader("Content-Type", "application/json")
    return (
      redisClient.unref(),
      redisClient
        .getAsync(`network.${type}.${req.params.useruuid}`)
        .catch(e => console.log(e))
        .then(user => JSON.parse(user))
        .then(user => JSON.stringify(user, null, 3))
        .then(user => res.send(user))
    )
  })
}

export default getUuidDetailsURL
