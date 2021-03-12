import WorkoutType from "../enums/WorkoutType";
import WorkoutImage from "../interfaces/WorkoutImage";
import BaseEntity from "./BaseEntity";

export default class WorkoutRoutine extends BaseEntity {
  private workoutType: WorkoutType;
  private workoutImages: Array<WorkoutImage>;

  constructor(
    workoutType: WorkoutType,
    workoutImages: Array<WorkoutImage>
  ) {
    super('Workout Routine');
    this.workoutType = workoutType;
    this.workoutImages = workoutImages;
  }

  public getImages(): Array<WorkoutImage> {
    return this.workoutImages;
  }
}
