import WorkoutType from "../enums/WorkoutType";
import WorkoutImage from "../interfaces/WorkoutImage";

export default interface WorkoutRoutineDTO {
  workoutRoutine: WorkoutType,
  workoutImages: WorkoutImage,
};
