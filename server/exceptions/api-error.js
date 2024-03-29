module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, messages, errors = []) {
        super(messages);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Unauthorized');
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }
};
