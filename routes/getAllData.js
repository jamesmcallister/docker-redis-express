import app from "../services/express.js"
import redisClient from "../services/redis.js"

const getAllData = type => {
  let stringLength = `network.${type}.`
  app.get(`/api/all/${type}`, (req, res) => {
    res.setHeader("header", "application/json")
    res.setHeader("Content-Type", "application/json")
    return (
      redisClient.unref(),
      redisClient
        .keysAsync(`network.${type}.*`)
        .catch(e => console.log(e))
        .map(users => users.slice(stringLength.length))
        .map(uuid =>
          redisClient
            .getAsync(`network.${type}.${uuid}`)
            .catch(e => console.log("error", e))
            .then(user => JSON.parse(user))
            .then(user => user)
        )
        .then(users => {
          console.log(users[0])
          return users
        })
        .then(users => Object.keys(users).map(key => users[key]))
        .then(users => res.status(200).send(users))
    )
  })
}

export default getAllData
