const Task = require('../models/Task');

const findAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();

    return res.status(200).json(allTasks);
  } catch (error) {
    return res.status(400).json({ error: 'Error ao buscar as tasks' });
  } 
}

const createNewTask = async (req, res) => {
  const { title } = req.body;

  try {
    const newTask = await Task.create({ title });

    return res.status(200).json(newTask);
  } catch(error) {
    return res.status(400).json({ error: 'Error criar nova task' });
  }
}

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { title });

    return res.status(200).json(updatedTask);
  } catch(error) {
    return res.status(400).json({ error: 'Error ao atualizar a task' });
  }
}

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await Task.deleteOne({ _id: id });

    return res.status(200).json(deletedTask);
  } catch(error) {
    return res.status(400).json({ error: 'Error ao deletar a task' });
  }
}

module.exports = {
  findAllTasks,
  createNewTask,
  updateTask,
  deleteTask
}