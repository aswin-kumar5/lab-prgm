const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(() => {
    console.log("MongoDB Connected");

    const studentSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            min: 18
        },
        department: String,
        email: {
            type: String,
            unique: true
        }
    });

    const Student = mongoose.model("Student", studentSchema);

    console.log("Schema Created Successfully");
    console.log("Model Created Successfully");

    mongoose.connection.close();
})
.catch(err => console.log("Connection Error:", err));