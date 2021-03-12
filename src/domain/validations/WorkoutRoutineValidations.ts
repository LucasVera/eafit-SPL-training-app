import ValidationMessages from "../constants/ValidationMessages";
import WorkoutRoutine from "../entities/WorkoutRoutine";
import ValidationSeverityType from "../enums/ValidationSeverityType";
import BaseValidator from '../interfaces/BaseValidator';
import ValidationResponse from "../interfaces/ValidationResponse";

export default class WorkoutRoutineValidations implements BaseValidator {
  workoutRoutine: WorkoutRoutine;
  entityName = 'Workout Routine';
  constructor(workoutRoutine: WorkoutRoutine) {
    this.workoutRoutine = workoutRoutine;
  }

  executeValidation(): ValidationResponse {
    const images = this.workoutRoutine.getImages();
    if (images.length <= 0) {
      return {
        entityName: this.entityName,
        hasValidation: true,
        validationMessage: ValidationMessages.NO_IMAGES,
        validationSeverity: ValidationSeverityType.HIGH,
      }
    }

    return {
      entityName: this.entityName,
      hasValidation: false
    };
  }
}
