import { WorkoutsContext } from "../WorkoutContext.tsx";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (context === undefined) {
    throw new Error(
      "useWorkoutsContext must be used within a WorkoutsContextProvider",
    );
  }

  return context;
};
