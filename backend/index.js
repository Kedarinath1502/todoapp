const express = require('express');
const app = express();

app.use(express.json);

app.post('/todo', (req, res) => {

})

app.get('/todos', (req, res) => {

})

app.put('/update', (req, res) => {

})

app.listen(3000,
    console.log("app is listening on 3000"))