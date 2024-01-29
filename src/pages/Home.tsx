import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails/WorkoutDetails.tsx";
import WorkoutForm from "../components/WorkoutForm/WorkoutForm.tsx";

interface Workout {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Home: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[] | null>(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts/");
      const json: Workout[] | null = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <WorkoutForm />
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
