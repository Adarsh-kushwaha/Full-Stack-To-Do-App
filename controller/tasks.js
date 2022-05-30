const Task = require('../models/tasks');

//get all tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks: tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

//create tasks
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

//get single task
const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: `no task found with ${taskId}` })
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//delete task
const deleteTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: `no task found with ${taskId}` })
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//update task
const updateTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
            runValidators: true,
            new: true
        })
        if (!task) {
            return res.status(404).json({ msg: `no task found with ${taskId}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask

}