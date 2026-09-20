const mongoose = require('mongoose');
const student = require('./student');

const main = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
        console.log("MongoDB Connected");

        const s = new student({
            name:"Aswin Kumar",
            age:18,
            dept:"Agri",
            email:"am@gmail.com"
        })
        await s.save();
        console.log("Inserted");
    }
    catch(err){
        console.log("Error: ",err);
    }finally{
        await mongoose.disconnect();
    }
}

main();