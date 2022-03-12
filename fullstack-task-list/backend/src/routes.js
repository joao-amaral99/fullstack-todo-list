const router = require('express').Router();

const TaskController = require('./controllers/TaskController');

router.get('/tasks', TaskController.findAllTasks);

router.post('/task', TaskController.createNewTask);

router.post('/task/:id', TaskController.updateTask);

router.delete('/task/:id', TaskController.deleteTask);

module.exports = router;