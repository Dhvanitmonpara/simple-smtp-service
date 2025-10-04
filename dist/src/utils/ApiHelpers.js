export class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = errors;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}
export const AsyncHandler = (requestHandler) => {
    return async (req, res, next) => {
        try {
            return await requestHandler(req, res, next);
        }
        catch (error) {
            res.status(error.code || 500).json({
                success: false,
                message: error.message,
            });
        }
    };
};
