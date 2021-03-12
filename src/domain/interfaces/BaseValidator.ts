import ValidationResponse from "./ValidationResponse";

export default interface BaseValidator {
  executeValidation: () => ValidationResponse,
  entityName: string,
};
