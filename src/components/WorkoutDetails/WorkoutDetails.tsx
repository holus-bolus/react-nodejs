import React from "react";
import styles from "./WorkoutDetails.module.css";
import { Workout } from "../../interfaces/Workout.ts";
import { useWorkoutsContext } from "../../context/hooks/useWorkoutsContext.tsx";

const WorkoutDetails: React.FC<{ workout: Workout }> = ({ workout }) => {
  const createdAtDate = new Date(workout.createdAt);

  const { dispatch } = useWorkoutsContext();

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/workouts/${workout._id}`,
        {
          method: "DELETE",
        },
      );
      if (response.ok) {
        dispatch({ type: "DELETE_WORKOUT", payload: workout._id });
      }
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  } as Intl.DateTimeFormatOptions;

  const formattedDate = createdAtDate.toLocaleString(undefined, options);

  return (
    <div className={styles.workoutDetails}>
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>
        <strong>Created At: </strong>
        {formattedDate}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default WorkoutDetails;
