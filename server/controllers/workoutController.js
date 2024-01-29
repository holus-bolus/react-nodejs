const Workout = require("../models/WorkoutModel");
const mongoose = require("mongoose");

/**
 * Handles HTTP GET requests to retrieve all workouts.
 * @async
 * @function
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

/**
 * Handles HTTP GET requests to retrieve a specific workout by its ID.
 * @async
 * @function
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {string} req.params.id - The ID of the workout to retrieve.
 */
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: `ID ${id} is not valid` });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    res.status(404).json({ error: `Workout with id ${id} has not been found` });
  }

  res.status(200).json(workout);
};

/**
 * Handles HTTP POST requests to create a new workout.
 * @async
 * @function
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {string} req.body.title - The title of the new workout.
 * @param {number} req.body.load - The load (weight) of the new workout.
 * @param {number} req.body.reps - The number of reps for the new workout.
 */
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Handles HTTP DELETE requests to delete a workout by its ID.
 * @async
 * @function
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {string} req.params.id - The ID of the workout to delete.
 */
const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Handles HTTP PATCH requests to update a workout by its ID.
 * @async
 * @function
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {string} req.params.id - The ID of the workout to update.
 */
const updateWorkout = async (req, res) => {
  // Your code for updating a workout goes here
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
