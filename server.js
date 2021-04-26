const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {PORT, URI} = require('./config')
const app = express()
const BookRoutes = require('./routes/book')

app.use(bodyParser.json())
app.use(cors())
app.use('/book', BookRoutes)

mongoose
    .connect(URI, {
    userNewUrlParser: true,
    userCreateIndex: true,
    userUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('DB connect'))
    .catch((err) => console.log(err))

app.use(router)
app.get('/', (req, res) => {
    res.send('111')
})

app.listen(PORT, () => console.log('server start'))