const { Router } = require('express');

const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
    // in real world, we would expect the user to pay you real money.
    res.json({
        message: "signup endpoint"
    })
});


courseRouter.get("/preview", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
});

module.exports = {
    courseRouter: courseRouter
}