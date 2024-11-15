const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
var routes = require('./Routes/routes')

app.use(express.json());

app.use(routes);


app.listen(4201, function check(err) {
  if (err) {
    console.log("error");
  } else {
    console.log("started");
  }
});

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Movie-Rating");
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
}

connectToDatabase();

