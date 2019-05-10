const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('json spaces', 2)

const url = 'mongodb://localhost:27017'
const dbName = 'finalgg'

const client = new MongoClient(url, { useNewUrlParser: true })

client.connect(function(err) {
  console.log("Connected to server")
  const db = client.db(dbName)
  const users = db.collection('users')

  app.get('/food/:user_id', (req, res) => {
    const user_id = req.params.user_id
    users.findOne({
      _id: new ObjectId(`${user_id}`)
    })
      .then(doc => {
        res.send(doc)
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })
  })

  app.post('/food/goal', (req, res) => {
    const { user_id , goal } = req.body
    users.updateOne({
      _id: new ObjectId(`${user_id}`)
    }, {
      $set: { goal }
    })
      .then(() => {
        res.send(`set goal to ${goal}`)
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })
  })

  app.post('/food/macros', (req, res) => {
    const { user_id, carbs, proteins, fats } = req.body
    users.updateOne({
      _id: new ObjectId(`${user_id}`)
    }, {
      $inc: {carbs: Number(carbs)},
      $inc: {proteins: Number(proteins)},
      $inc: {fats: Number(fats)}
    })
      .then(() => {
        res.send('success')
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })
  })

  app.listen(8000)
})