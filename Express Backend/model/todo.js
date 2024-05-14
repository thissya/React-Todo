const mongoose=require('mongoose')

const TodoModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    iscompleted:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model("Todo",TodoModel) 