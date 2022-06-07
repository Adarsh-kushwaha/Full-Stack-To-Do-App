const express = require('express');
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require('./middleware/not-found');
require("dotenv").config();


const app = express();

//middleware for json data
app.use(express.json());

//Routes
app.use("/api/v1/tasks", tasks)
app.use(notFound)

//port for running server
const port = 5000

//connecting to database
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log("running on port 5000"));
    } catch (error) {
        console.log(error)
    }
}

start();


