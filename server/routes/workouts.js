const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");
const router = express.Router();
const Workout = require("../models/WorkoutModel");

/**
 * Handles HTTP GET requests for retrieving all workouts.
 * @function
 * @name getAllWorkouts
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
router.get("/", getWorkouts);

/**
 * Handles HTTP GET requests for retrieving a specific workout by its ID.
 * @function
 * @name getWorkoutById
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {string} req.params.id - The ID of the workout to retrieve.
 */
router.get("/:id", getWorkout);

/**
 * Handles HTTP POST requests for creating a new workout.
 * @function
 * @name createWorkout
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {string} req.body.title - The title of the new workout.
 * @param {number} req.body.load - The load (weight) of the new workout.
 * @param {number} req.body.reps - The number of reps for the new workout.
 */
router.post("/", createWorkout);

/**
 * Handles HTTP DELETE requests for deleting a workout by its ID.
 * @function
 * @name deleteWorkoutById
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {string} req.params.id - The ID of the workout to delete.
 */
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});

/**
 * Handles HTTP PATCH requests for updating a workout by its ID.
 * @function
 * @name updateWorkoutById
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {string} req.params.id - The ID of the workout to update.
 */
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

module.exports = router;
