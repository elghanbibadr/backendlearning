
const router = require("express").Router();
const {getTasks,createTask,getSingleTask } = require("../controllers/task.controller");


router.route("/").get(getTasks).post(createTask);
router.route('/:id').get(getSingleTask)

module.exports = router;