const mongoose = require('mongoose');
const Student = require('./student');

const main = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/studentDB');

        console.log("MongoDB Connected");

        // Update
        const updateResult = await Student.updateOne(
            { name: "Smith" },
            { age: 22 }
        );

        console.log("Updated:", updateResult);

        // Delete
        const deleteResult = await Student.deleteOne(
            { name: "Jones" }
        );

        console.log("Deleted:", deleteResult);

    } catch (err) {
        console.log("Error:", err);
    } finally {
        await mongoose.disconnect();
    }
};

main();