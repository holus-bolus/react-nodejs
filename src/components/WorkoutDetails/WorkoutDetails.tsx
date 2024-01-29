import React from "react";
import styles from "./WorkoutDetails.module.css";

interface Workout {
  title: string;
  load: number;
  reps: number;
  createdAt: string;
}

const WorkoutDetails: React.FC<{ workout: Workout }> = ({ workout }) => {
  const createdAtDate = new Date(workout.createdAt);

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
    </div>
  );
};

export default WorkoutDetails;
