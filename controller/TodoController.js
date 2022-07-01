const {Todos} = require('../model/TODO');
// const {v4: uuid} = require("uuid");

//create Todo MongoApi
exports.createTodo = (req, res) => {
    Todos.create({
        title: "Ben Harry",
        description: "One of my fav Developer"
    }, (err, todo) => {
        if(err) console.log(err.message)
        else console.log({
            message: "Todo Created Successfully",
            todo
        })
    });
}

// Query finding All Todo
exports.getAllTodos = (req, res) => {
    Todos.find({}, (err, todo) => {
        if(err) console.log(err.message)
        else console.log({
            message: "Todo is Present",
            todo
        })
    });
}
// Query finding A single Todo
Todos.find({ title: "Ben Harry" }, (err, todo) => {
    if(err) console.log(err.message)
    else console.log({
        message: "Todo Found",
        todo
    })
});

// Todos.findOne({ title: "Ben Harry" }, (err, todo) => {
//     if(err) console.log(err.message)
//     else console.log({todo})
// });


//Query find Todo by Id
exports.getSingleTodo = (req, res) => {
    Todos.findById({ _id: "62bd9c7066e04f0f8aeb0f1a" }, (err, todo) => {
        if(err){
            console.log(err.message)
        }else{
            console.log({
                message: "Todo Found",
                todo})
        } 
    })
}

//Query Updating Todo

exports.updateTodo = (req, res) => {
    Todos.findByIdAndUpdate("62bd9c7066e04f0f8aeb0f1a", { title: 'Made in Lagos' }, (err, todo)=> {
        if(err) console.log(err.message)
        else {
            todo.save((err, todo) =>{
                if(err) console.log(err.message)
                else console.log({message: 'Todo updated Successfully',
                        todo
            });
            })
        }
    });
}

//Query Deleting Todo
exports.deleteTodo = (req, res) => {
    Todos.deleteOne('62bd9c7066e04f0f8aeb0f1a', { title: " Made in Lagos"}, (err, todo) => {
        if(err) console.log(err.message)
        else console.log({
            message: "Todo deleted Successfully",
            todo});
    })
};


