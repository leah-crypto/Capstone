const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const bodyParse = require("body-parser")

const {
    seed,
    getQuestions
} = require("./controler/controler");

app.use(cors());
app.use(express.json())
// app.post('/seed', seed);

app.get(`/api/quiz`, getQuestions);



app.listen(4000, () => {
    console.log(`Listening on 4000`)
})