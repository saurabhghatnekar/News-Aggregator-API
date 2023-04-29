const TaskModel = require('../models/task.model');

const getAllTasks = () => {
    return TaskModel.all();
}

const getTaskById = (id) => {
    //transform id to integer

    return TaskModel.find(id);
}

const createTask = (task) => {
    return TaskModel.create(task);
}

const updateTask = (id, toUpdate) => {
    return TaskModel.update(id, toUpdate);
}

const deleteTask = (id) => {
    return TaskModel.delete(id);

}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}