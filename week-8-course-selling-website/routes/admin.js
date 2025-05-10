const { Router } = require('express');

const adminRouter = Router();


adminRouter.post("/signup", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
});


adminRouter.post("/signin", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
});

adminRouter.use(adminMiddleware);

adminRouter.post("/course", (req, res) => {
    res.json({
        message: "admin endpoint"
    })
});


adminRouter.put("/course", (req, res) => {
    res.json({
        message: "admin endpoint"
    })
});


adminRouter.get("/course", (req, res) => {
    res.json({
        message: "admin endpoint"
    })
});

module.exports = {
    adminRouter: adminRouter
}
