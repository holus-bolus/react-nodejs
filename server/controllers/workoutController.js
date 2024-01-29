const Workout = require("../models/WorkoutModel");
const mongoose = require("mongoose");

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: `ID ${id} is not valid` });
  }
  next(); // Proceed to the next middleware or route handler if the ID is valid
};

// T

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
 *
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
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: `ID ${id} is not valid` });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    res.status(404).json({ error: `Workout with id ${id} has not been found` });
  }

  res.status(200).json(workout);
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
  const { id } = req.params;
  const { title, load, reps } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: `ID ${id} is not valid` });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    res.status(404).json({ error: `Workout with id ${id} has not been found` });
  }

  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
