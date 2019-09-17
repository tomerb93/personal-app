const express = require('express');

const TasksController = require('../controllers/tasks');

const router = express.Router();

router.post('', TasksController.createTask);

router.get('', TasksController.getTasks);

router.delete('/:id', TasksController.deleteTask);

router.put('/:id', TasksController.updateTask);

module.exports = router;
