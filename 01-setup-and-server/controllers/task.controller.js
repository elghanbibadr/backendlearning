const { default: mongoose } = require("mongoose");
const Task = require("../models/task.models");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { title, done } = req.body;

  if (!title) return res.status(400).send("title is required");

  try {
    const task = await Task.create({
      title,
      done,
    });

    return res.status(200).send({
      task,
    });
  } catch (error) {
    return res.status(500).send({
      message: "faild to created tasl",
    });
  }
};

exports.getSingleTask = async (req, res) => {
  const taskId = req.params.id;

  if (!mongoose.isValidObjectId(taskId))
    return res.status(400).send({ message: "invalid task id" });

  try {
    const task = await Task.findById(taskId);

    if (!task)
      return res
        .status(404)
        .send({ message: "task with the given id not found" });

    return res.status(200).send(task);
  } catch (error) {
    return res.status(500).send({ message: "something went wrong" });
  }
};
