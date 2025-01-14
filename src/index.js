const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./database/db");
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    res.send("Hello World !!");
});

connectDB();

app.listen(port, () => {
    console.log(`Express API running in port: ${port}`);
});