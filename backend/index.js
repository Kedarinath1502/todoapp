const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());

app.post('/todo', async (req, res) => {
    const createpayload = req.body;
    const bodyparser = createTodo.safeParse(createpayload);

    if (!bodyparser.success) {
        return res.status(404).json({ msg: "wrong inputs" })

    }

    await todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed: false
    })
    res.json({ msg: "todo created" })
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.send(todos)
})

app.put('/update', async (req, res) => {
    const createpayload = req.body;
    const bodyparser = updateTodo.safeParse(createpayload);
    if (!bodyparser.success) {
        res.status(405).json({ msg: "wrong id" })
        return;
    }

    const result = await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({ msg: " marked todo as complete" })

})

app.listen(3001, () => {
    console.log("app is listening on 3000")
})