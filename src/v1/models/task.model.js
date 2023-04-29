

const tasks = [
    {
        id: 1000,
        title: 'Learn Node.js',
        description: 'Learn how to use Node.js with Express, Sequelize, and PostgreSQL',
        isComplete: false,
        createdAt: new Date(),
        dueAt: new Date() + 1,
    },
    {
        id: 1001,
        title: 'Learn React',
        description: 'Learn how to use React with Redux',
        isComplete: false,
        createdAt: new Date(),
        dueAt: new Date() + 1,
    }
]
const randomNumber = (function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
})(1002, 9999);

const TaskModel = {
    all() {
        return tasks;
    },
    find(id) {
        return tasks.find(task => task.id === id);
    },
    create(task) {
        task.id = randomNumber
        tasks.push(task);
        return task;
    },
    update(id, toUpdate) {
        const taskIndex = tasks.findIndex(task => task.id === id);
        console.log(taskIndex, toUpdate)
        if (taskIndex === -1) {
            return null;
        }
        tasks[taskIndex] = {...tasks[taskIndex], ...toUpdate};
        return tasks[taskIndex];
    },
    delete(id) {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) {
            return null;
        }
        const deletedTask = tasks[taskIndex];
        tasks.splice(taskIndex, 1);
        return deletedTask;
    }

}

module.exports = TaskModel;