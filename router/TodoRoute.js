const router = require('express').Router();
const controller = require('../controller/TodoController')

router
    .get("/", controller.getAllTodos)
    .get("/:id", controller.getSingleTodo)
    .post("", controller.createTodo)
    .put('/:id', controller.updateTodo)
    .delete('/:id', controller.deleteTodo);

module.exports = router;