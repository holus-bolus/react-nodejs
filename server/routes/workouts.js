const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `Get workout with id ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.json({ message: "Create a new workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

module.exports = router;
