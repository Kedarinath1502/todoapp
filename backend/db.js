const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kedari:kedari@courseselling.ng6h8yv.mongodb.net/todoreact');
const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoschema);

module.exports = {
    todo
}
