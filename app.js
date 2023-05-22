require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = 8003;

app.use(cors());
app.use(express.json());

app.use(router);

app.use(express.static(path.join(__dirname, "client", "build")));

app.listen(port, () => {
    console.log(`server is started on http://localhost:${port}/`);
});