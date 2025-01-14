const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/db");
const port = process.env.PORT;
const Routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/", Routes);

connectDB();

app.listen(port, () => {
    console.log(`Express API running in port: ${port}`);
});