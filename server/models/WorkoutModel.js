const mongoose = require("mongoose");

// Define the schema for workouts
const Schema = mongoose.Schema;

/**
 * Represents a workout schema in the MongoDB database.
 * @class
 */
const workoutSchema = new Schema(
  {
    /**
     * The title of the workout.
     * @member {string}
     * @required
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * The number of reps for the workout.
     * @member {number}
     * @required
     */
    reps: {
      type: Number,
      required: true,
    },
    /**
     * The load (weight) for the workout.
     * @member {number}
     * @required
     */
    load: {
      type: Number,
      required: true,
    },
  },
  {
    /**
     * Automatically adds timestamps for createdAt and updatedAt fields.
     * @property {boolean}
     */
    timestamps: true,
  },
);

/**
 * Represents a Workout model.
 * @typedef {Model} Workout
 * @property {string} title - The title of the workout.
 * @property {number} reps - The number of reps for the workout.
 * @property {number} load - The load (weight) for the workout.
 * @property {Date} createdAt - The timestamp when the workout was created.
 * @property {Date} updatedAt - The timestamp when the workout was last updated.
 */

/**
 * Exports the Workout model.
 * @type {Model}
 */
module.exports = mongoose.model("Workout", workoutSchema);
