import ValidationSeverityType from "../enums/ValidationSeverityType";

export default interface ValidationResponse {
  entityName: string,
  hasValidation: boolean,
  validationMessage?: string,
  validationSeverity?: ValidationSeverityType,
};
