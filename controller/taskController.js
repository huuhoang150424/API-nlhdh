const Tasks=require("../model/taskModel")
class taskController {
    async addTask (req,res,next) {
        try {
            const Task=new Tasks(req.body)
            const saveTask=await Task.save()
            res.status(200).json(saveTask)
        }
        catch (err) {
            next(err)
        }
    }
    async getAllTask(req,res,next) {
        try {
            const AllTask=await Tasks.find()
            res.status(200).json({data: AllTask})
        }catch (err) {
            next(err)
        }
    }
    async getTask(req,res,next) {
        try {
            const Task=await Tasks.findById(req.params.id)
            res.status(200).json({data:Task})
        }catch (err) {
            next(err)
        }
    }
    async upDateTask(req,res,next) {
        try {
            await Tasks.updateOne({_id: req.params.id},req.body)
            res.status(200).json("update success")
        }catch (err) {
            next(err)
        }
    }
    async deleteTask(req, res, next) {
        try {
            const deletedTask = await Tasks.findByIdAndDelete(req.params.id)
            if (!deletedTask) {
                return res.status(404).json({ error: "Task not found" })
            }
            res.status(200).json({ message: "Delete success" })
        } catch (err) {
            next(err);
        }
    }
    
}
module.exports=new taskController