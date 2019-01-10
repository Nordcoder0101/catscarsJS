const express = require('express')
const app = express()

app.use(express.static(__dirname + '/static/'))
app.use(express.static(__dirname + '/static/images/'))
app.use(express.static(__dirname + '/static/stylesheets/'))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get("/cars", (req, res) =>{
  
  res.render('cars')
})

app.get("/cats", (req, res) => {

  res.render('cats')
})

app.get("/form", (req, res) => {
  res.render('form')
})



app.listen(8000, () => console.log('Listening on port 8000'))