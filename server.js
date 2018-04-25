const express = require('express')
const bodyParser = require('body-parser')
const firebase = require('firebase')

const app = new express()

app.use(bodyParser.json())

app.use('/js', express.static(__dirname + '/static/js'))

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.post('/pushToDatabase', (req, res) => {
  const data = req.body
  const config = {
    apiKey: "AIzaSyA6sqpA-j4LPytPsMcfq4eS9EQt8FFXmLc",
    authDomain: "climbing-1cb0e.firebaseapp.com",
    databaseURL: "https://climbing-1cb0e.firebaseio.com",
    projectId: "climbing-1cb0e",
    storageBucket: "climbing-1cb0e.appspot.com",
    messagingSenderId: "863402480625"
  }
  firebase.initializeApp(config)
  firebase
    .database()
    .ref('/' + new Date().getTime())
    .set(data)
})

app.listen(4000, err => {
  err 
    ? console.log('Error setting up server.')
    : console.log('Server running on port 4000.')
})
