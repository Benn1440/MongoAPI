// exports.Todos = [];
const { model} = require('mongoose')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoScheme = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Todos = mongoose.model('Todo', TodoScheme);
// const Todos = model("Todo", TodoScheme);

module.exports.Todos = Todos;
// exports.Todos = Todos;