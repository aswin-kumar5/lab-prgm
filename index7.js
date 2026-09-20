const mongoose = require('mongoose');
const Student = require('./student');

const main = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/studentDB');

        console.log("MongoDB Connected");

        const s = new Student({
            name: "Smith",
            age: 21,
            department: "IT",
            email: "smith@gmail.com"
        });

        await s.save();

        console.log("Inserted");

        const data = await Student.find();

        console.log(data);

    } catch (err) {
        console.log("Error:", err);
    }
};

main();