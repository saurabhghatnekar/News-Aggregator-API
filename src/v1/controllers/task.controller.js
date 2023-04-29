const httpStatus = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const ApiError = require("../../utils/ApiError");
const {TaskService} = require("../services");


const getAllTasks = catchAsync(async (req, res) => {
    const tasks = TaskService.getAllTasks()
    res.status(httpStatus.OK).json({
        data: tasks,
        message: "Successfully Tasks Retrieved"
    })

})

const getTaskById = catchAsync(async (req, res) => {
    let {id} = req.params
    if (id) {
        id = parseInt(id);
        const task = TaskService.getTaskById(id)
        if (task) {
            res.status(httpStatus.OK).json({
                data: task,
                message: "Successfully Tasks Retrieved"
            })
        } else {
            res.status(httpStatus.NOT_FOUND).json({
                message: "Task Not Found"
            })
        }

    } else {
        throw new ApiError(httpStatus.BAD_REQUEST, "Please send Id")
    }
})

const createTask = catchAsync(async (req, res) => {
    let {title, description, isCompleted} = req.body
    console.log(isCompleted, typeof isCompleted)
    if (title && description && (typeof isCompleted === 'boolean')) {
        let task = TaskService.createTask({
            title,
            description,
            isCompleted
        })
        res.status(httpStatus.CREATED).json({
            data: task,
            message: "Task created successfully"
        })
    } else {
        if (typeof isCompleted !== "boolean") {
            throw new ApiError(httpStatus.BAD_REQUEST, "Completion status should be boolean value")
        }
        throw new ApiError(httpStatus.BAD_REQUEST, "Make sure you pass title, description and isCompleted in the body.")
    }

})

const updateTask = catchAsync(async (req, res) => {
    let {id} = req.params
    let toUpdate = req.body
    if (toUpdate.hasOwnProperty("id")) {
        delete toUpdate.id
    }

    if (id) {
        id = parseInt(id);
        const task = TaskService.updateTask(id, toUpdate)
        if (task) {
            res.status(httpStatus.OK).json({
                data: task,
                message: "Task updated successfully"
            })
        } else {
            res.status(httpStatus.NOT_FOUND).json({
                message: "Task Not Found"
            })
        }

    } else {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Send task id to update the task')
    }

})

const deleteTask = catchAsync(async (req, res) => {
        let {id} = req.params
        if (id) {
            id = parseInt(id);
            let status = TaskService.deleteTask(id)
            if (status) {
                res.status(httpStatus.OK).json({
                    message: "Task deleted successfully"
                });
            } else {
                res.status(httpStatus.NOT_FOUND).json({
                    message: "Task Not Found"
                })
            }
        } else {
            throw new ApiError(httpStatus.BAD_REQUEST, "Please send Id")
        }
    }
)

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}