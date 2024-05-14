const Todo= require('../model/todo')

module.exports.getAllTodo =async(req,res)=>{
    try{
        const todos=await Todo.find({});
        res.status(200).send(todos)
    }
    catch(err){ 


        res.send(500).send(err.message);
    }
}

module.exports.getTodoById =async(req,res)=>{
    const {id} =req.params;
    try{
        const todo=await Todo.findById(id);
        if(todo)
        {
            res.status(200).send(todo)
        }
        else{
            res.status(400).send({msg:"todo not found"})
        }    
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
}

module.exports.addTodo =async(req,res)=>{
    try{
        const todos=new Todo(req.body);
        await todos.save();
        res.status(200).send({msg:"todo created"})
    }
    catch(err)
    {
        res.status(500).send(err.message)
    }
}

module.exports.updateTodo =async(req,res)=>{
    const {id}=req.params;
    try{
        const todo = await Todo.findByIdAndUpdate(id,req.body);
        if(todo)
        {
            res.status(200).send({msg:"value updated successfully"})
        }
        else{
            res.status(400).send({msg:"todo not found"})
        }
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
}

module.exports.deleteTodo =async(req,res)=>{
    const {id}=req.params;
    try{
        const todo=await Todo.findByIdAndDelete(id);
        if(todo)
        {
            res.status(200).send({msg:"Todo deleted successfully"});
        }
        else{
        res.status(400).send({msg:"todo not found"});
        }
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
}
