const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/abcd')
.then(()=>console.log("MongoDb Connected"))
.catch(err=>console.log("Connection Error:",err));