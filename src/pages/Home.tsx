import React, { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails/WorkoutDetails.tsx";
import WorkoutForm from "../components/WorkoutForm/WorkoutForm.tsx";
import { useWorkoutsContext } from "../context/hooks/useWorkoutsContext.tsx";
import { Workout } from "../interfaces/Workout.ts";

const Home: React.FC = () => {
  const { state, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/workouts/");
        if (response.ok) {
          const json: Workout[] | null = await response.json();
          if (json !== null) {
            dispatch({ type: "SET_WORKOUTS", payload: json });
          }
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <WorkoutForm />
      <div className="workouts">
        {state.workouts &&
          state.workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
