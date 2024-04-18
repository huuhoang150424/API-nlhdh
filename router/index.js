const taskRouter=require("./task")

const route=(app)=>{
    app.use("/v1/task",taskRouter)
}

module.exports=route