const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'build')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)
