const express = require("express");
const app = express();
const PORT = 3000;
const tasks = require("./routes/task");
const { execPath } = require("process");
const connect = require("./db/connection");
app.use(express.json());
const notFound = require("./middleware/not-found");
require("dotenv").config();

app.get("/hello", (req, res) => {
  res.send("Welocme");
});

app.use("/api/v1/tasks", tasks);
app.use(notFound);

const start = async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
