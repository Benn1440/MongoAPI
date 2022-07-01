const express = require('express');
const mongoose = require('mongoose');
const {json} = require('express');
const todo = require('./router/TodoRoute');


const app = express();

app.use(json());

app.use("/todo", todo);

mongoose.connect("mongodb://localhost:27017/ZuriDb", { useNewUrlParser : true, useUnifiedTopology: true}, (err) => {
    if(!err) console.log('Database Connected')
    else console.log(err.message);
});

const PORT = process.env.PORT || 3200;

app.get('/', (req, res) => {
    res.send('MongoAPI');
});


app.listen(PORT, ()=> console.log(`Server is listening at ${PORT}`));