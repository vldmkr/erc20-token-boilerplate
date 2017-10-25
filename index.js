const express = require('express')
const app = express()

app.use(express.static(__dirname))

const listener = app.listen(8080, function () {
  console.log('Server listening on port ' + listener.address().port)
})
