const Task = require("../module/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    res.status(201).json({ tasks });
    console.log(tasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTasks = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ msg: `no Task with ID:${id}` });
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTasks = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    const task = await Task.findByIdAndUpdate(id, update, { new: true });

    if (!task) {
      return res.status(404).json({ msg: `No Task with ID: ${id}` });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteTasks = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({
        msg: `no task with id: ${id}`,
      });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  deleteTasks,
  updateTasks,
  createTasks,
  getTasks,
};
