const { Router } = require('express');
const { purchaseModel } = require("../db");
const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async (req, res) => {
    // in real world, we would expect the user to pay you real money.
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId, 
        courseId
    })
    
    res.json({
        message: "Course purchased successfully"
    });
});


courseRouter.get("/preview", async (req, res) => {

    const courses = await courseModel.find({});
    res.json({
        courses
    })
});

module.exports = {
    courseRouter: courseRouter
}