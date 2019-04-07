// NOTE: Below custom errors are hack because Jest has a bug with asserting error types

/**
 * @ignore
 */
export const ValidationError = function(message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
};

/**
 * @ignore
 */
export const Validation1DMatrixError = function(message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
};

/**
 * @ignore
 */
export const Validation2DMatrixError = function(message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
};

/**
 * @ignore
 */
export const ValidationMatrixTypeError = function(message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
};

/**
 * @ignore
 */
export const ValidationClassMismatch = function(message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
};

/**
 * @ignore
 */
export const ValidationKeyNotFoundError = function(message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
};

/**
 * @ignore
 */
export const ValidationInconsistentShape = function(message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
};
