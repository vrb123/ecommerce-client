function ForbiddenError(message) {
    this.name = 'ForbiddenError';
    this.message = message || ""
}

ForbiddenError.prototype = Error.prototype;

export default ForbiddenError;