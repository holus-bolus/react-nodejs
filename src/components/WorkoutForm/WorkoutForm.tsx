import React, { useState } from "react";
import styles from "./WorkoutForm.module.css";
const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState(0);
  const [reps, setReps] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const workout: { title: string; load: number; reps: number } = {
      title,
      load,
      reps,
    };

    const response = await fetch("http://localhost:4000/api/workouts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log(json);
      setLoad(0);
      setReps(0);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h3 className={styles.h3}>Add a new workout</h3>
      <label>
        Exercise title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
      </label>
      <label>
        Load (kg)
        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(Number(e.target.value))}
          className={styles.input}
        />
      </label>
      <label>
        Number of reps
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>
        Send the workout
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};
export default WorkoutForm;
