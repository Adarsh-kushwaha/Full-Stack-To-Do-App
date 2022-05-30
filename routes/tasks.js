const express = require('express');
const { route } = require('express/lib/router');
const { getAllTasks, deleteTask, updateTask, getTask, createTask } = require("../controller/tasks");

const router = express.Router();

//routes
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").delete(deleteTask).patch(updateTask).get(getTask);


module.exports = router;