
const router = require("express").Router();
const {getTasks,createTask,getSingleTask,updateTaskField, deleteTask } = require("../controllers/task.controller");


router.route("/").get(getTasks).post(createTask);
router.route('/:id').get(getSingleTask)
router.route('/:id').patch(updateTaskField)
router.route('/:id').delete(deleteTask)



module.exports = router;