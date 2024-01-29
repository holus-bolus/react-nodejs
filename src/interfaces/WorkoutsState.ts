import { Workout } from './Workout.ts';

export interface WorkoutsState {
  workouts: Workout[] | null;
}
