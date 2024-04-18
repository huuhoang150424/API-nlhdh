const mongoose=require("mongoose")

const connect=async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Task')
        console.log('Kết nối thành công')
    }
    catch (err) {
        console.log('Kết nối thất bại')
    }
}

module.exports={connect}