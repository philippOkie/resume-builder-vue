const express = require("express");
const cors = require("cors");

require("express-async-errors");
const mongoose = require("mongoose");

const resumeRouter = require("./controllers/resumes");

const config = require("./utils/config");
const middleware = require("./utils/middleware");

mongoose.set("strictQuery", false);

const app = express();

(async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
})();

app.use(cors());
app.use(express.json());

app.use("/api/resumes", resumeRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
