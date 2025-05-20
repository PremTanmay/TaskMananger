const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
  },
  Completed: Boolean,
});

const Tasks = mongoose.model("Task", TaskSchema);
module.exports = Tasks;
