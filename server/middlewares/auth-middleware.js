const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

module.exports = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        }
        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        }
        const payload = tokenService.validateAccessToken(accessToken);
        if (!payload) {
            return next(ApiError.UnauthorizedError());
        }
        req.user = payload;
        next();
    } catch (error) {
        return next(ApiError.UnauthorizedError());
    }
};
