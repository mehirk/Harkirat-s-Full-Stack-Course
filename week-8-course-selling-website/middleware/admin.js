const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_ADMIN_PASSWORD;

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded) {
        req.userId = decoded.id;
        next();
    } else {
        res.status(401).json({
            message: "You are not logged in"
        });
    }

};

module.exports = {
    adminMiddleware: adminMiddleware
};