const mongoose = require("mongoose");

const DB = "mongodb+srv://jamesbryansurmion1:Du2Nhdk1A5BZ5qhR@cluster0.4viyjsf.mongodb.net/mernstack"


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection start")).catch((error) => console.log(error.message));