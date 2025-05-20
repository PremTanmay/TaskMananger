const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/task");
router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").patch(updateTasks).delete(deleteTasks).get(getTasks);
router.route("/create");
module.exports = router;
