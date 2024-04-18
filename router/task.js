const express=require("express")
const Router=express.Router()
const taskController=require("../controller/taskController")

Router.get('/getAllTask',taskController.getAllTask)
Router.get('/getTask',taskController.getTask)
Router.post('/createTask',taskController.addTask)
Router.put('/:id/upDate',taskController.upDateTask)
Router.delete('/:id/destroyTask',taskController.deleteTask)

module.exports=Router
