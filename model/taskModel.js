const mongoose=require("mongoose")
const {Schema}=mongoose
const taskSchema=new Schema({
    name: {
        type: String,
        required: true
    },
    description: {type: String,required: true},
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending'
    },
    startDate:{type:  Date,default:Date.now},
    endDate: {type: Date}
})
module.exports=new mongoose.model('tasks',taskSchema)