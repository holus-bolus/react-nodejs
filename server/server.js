/**
 * This is a Node.js Express application for handling workouts data.
 * @module app
 */

require("dotenv").config();
const express = require("express");
const app = express();
const workoutsRoutes = require("./routes/workouts");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,POST,PATCH,DELETE",
  }),
);

app.use("/api/workouts", workoutsRoutes);

app.use((req, res, next) => {
  /**
   * Logs the HTTP method and path of incoming requests.
   * @function
   * @param {object} req - The HTTP request object.
   * @param {object} res - The HTTP response object.
   * @param {function} next - The next middleware function.
   */
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  /**
   * Responds with "Hello World!" for the root path.
   * @function
   * @param {object} req - The HTTP request object.
   * @param {object} res - The HTTP response object.
   */
  res.send("Hello World!");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Successfully connected to MongoDB and listening on port ${process.env.PORT}!`,
      );
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB!");
    console.log(err);
  });
