import React, { createContext, useReducer, ReactNode } from "react"; // Import ReactNode

interface Workout {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface WorkoutsState {
  workouts: Workout[] | null;
}

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

interface WorkoutsContextProviderProps {
  children: ReactNode; // Use ReactNode for children prop
}

const WorkoutsContextProvider = ({
  children,
}: WorkoutsContextProviderProps) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

  return (
    <WorkoutsContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export { WorkoutsContext, WorkoutsContextProvider };
