const express=require("express")
const router =express.Router();

const {
    getAllTodo,
    getTodoById     ,
    addTodo,
    updateTodo,
    deleteTodo
}=require('../controller/todo');

router.get('/',getAllTodo)
router.get('/:id',getTodoById)
router.post('/',addTodo)
router.put('/:id',updateTodo)
router.delete('/:id',deleteTodo)

module.exports = router;
