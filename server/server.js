require("dotenv").config();
const express = require("express");
const app = express();
const workoutsRoutes = require("./routes/workouts");

app.use(express.json());

app.use("/api/workouts", workoutsRoutes);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening!`);
});
