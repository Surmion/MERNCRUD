const mongoose = require("mongoose");

// const DB = "mongodb+srv://jamesbryansurmion1:Du2Nhdk1A5BZ5qhR@cluster0.4viyjsf.mongodb.net/mernstack";
const DB = "mongodb://127.0.0.1:27017/mernstack";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection start on database")).catch((error) => console.log(error.message));