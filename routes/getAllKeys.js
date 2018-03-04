import app from "../services/express.js"
import redisClient from "../services/redis.js"

const getAllKeys = type => {
  let stringLength = `network.${type}.`
  app.get(`/api/${type}`, (req, res) => {
    res.setHeader("header", "application/json")
    res.setHeader("Content-Type", "application/json")
    return (
      redisClient.unref(),
      redisClient
        .keysAsync(`network.${type}.*`)
        .catch(e => console.log(e))
        .map(users => users.slice(stringLength.length))
        .then(users => JSON.stringify(users, null, 3))
        .then(users => res.status(200).send(users))
    )
  })
}

export default getAllKeys
