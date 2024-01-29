import React, { createContext, useReducer } from "react";
import { Workout } from "../interfaces/Workout.ts";
import { WorkoutsContextProviderProps } from "../interfaces/WorkoutContextProviderProps.ts";
import { WorkoutsState } from "../interfaces/WorkoutsState.ts";

type WorkoutsAction =
  | { type: "SET_WORKOUTS"; payload: Workout[] }
  | { type: "CREATE_WORKOUT"; payload: Workout }
  | { type: "DELETE_WORKOUT"; payload: string };

const WorkoutsContext = createContext<
  | {
      state: WorkoutsState;
      dispatch: React.Dispatch<WorkoutsAction>;
    }
  | undefined
>(undefined);

export const workoutsReducer = (
  state: WorkoutsState,
  action: WorkoutsAction,
): WorkoutsState => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: state.workouts
          ? [...state.workouts, action.payload]
          : [action.payload],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts
          ? state.workouts.filter((workout) => workout._id !== action.payload)
          : null,
      };
    default:
      return state;
  }
};

const WorkoutsContextProvider = ({
  children,
}: WorkoutsContextProviderProps) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

  const contextValue = {
    state,
    dispatch,
  };

  return (
    <WorkoutsContext.Provider value={contextValue}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export { WorkoutsContext, WorkoutsContextProvider };
