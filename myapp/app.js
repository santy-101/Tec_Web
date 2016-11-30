var express = require('express')
var app = express()

app.post('/TecnologiasWeb', function (req, res) {
    res.send('con put!')
})

app.listen(5050, function () {
console.log('Example app listening on port 5050!')
})

