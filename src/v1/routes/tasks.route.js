const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/task.controller')

// GET /tasks: Retrieve all tasks.
router.get('/', TaskController.getAllTasks)

// GET /tasks/:id: Retrieve a single task by its ID.
router.get('/:id', TaskController.getTaskById)

// POST /tasks: Create a new task.
router.post('/', TaskController.createTask)

// PUT /tasks/:id: Update an existing task by its ID.
router.put('/:id', TaskController.updateTask)

// DELETE /tasks/:id: Delete a task by its ID.
router.delete('/:id', TaskController.deleteTask)

module.exports = router;

