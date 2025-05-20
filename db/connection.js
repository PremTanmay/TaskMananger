const { log } = require("console");
const mongoose = require("mongoose");

const connect = async () => {
  const mongoUrl = process.env.MONGO_URL;
  await mongoose.connect(mongoUrl).then(() => {
    console.log("connected with Database");
  });
};
module.exports = connect;
