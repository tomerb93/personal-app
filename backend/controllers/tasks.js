const Task = require('../models/task');

exports.createTask = (req, res, next) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    dateCreated: req.body.dateCreated
  });
  task
    .save()
    .then((createdTask) => {
      res.status(201).json({
        message: 'Task added successfully',
        task: {
          ...createdTask,
          id: createdTask._id
        }
      });
    })
    .catch(() => {
      res.status(500).json({
        message: 'Creating a post failed!'
      });
    });
};

exports.getTasks = (req, res, next) => {
  Task.find()
    .sort({ dateCreated: '-1' })
    .then((tasks) => {
      res.status(200).json({
        tasks: tasks
      });
    });
};

exports.updateTask = (req, res, next) => {
  const task = new Task({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    dateCreated: req.body.dateCreated
  });
  console.log(req.params.id);
  Task.updateOne({ _id: req.params.id }, task).then((result) => {
    if (result.n > 0) {
      res.status(200).json({ message: 'Update successful' });
    } else {
      res.status(401).json({ message: 'Update not successful' });
    }
  });
};

exports.deleteTask = (req, res, next) => {
  Task.deleteOne({ _id: req.params.id }).then((result) => {
    if (result.n > 0) {
      res.status(200).json();
    } else {
      res.status(401).json();
    }
  });
};
