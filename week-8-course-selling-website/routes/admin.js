const { Router } = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { adminModel, courseModel } = require("../db");
const { adminMiddleware } = require("../middleware/admin");

const adminRouter = Router();
const JWT_SECRET = process.env.JWT_ADMIN_PASSWORD;

const signupSchema = z.object({
    email: z.string().email().min(2).max(30),
    password: z.string().min(8).max(50),
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50)
});

const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

const courseSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    imageUrl: z.string().url(),
    price: z.number().min(0)
});

adminRouter.post("/signup", async (req, res) => {
    try {
        const { email, password, firstName, lastName } = signupSchema.parse(req.body);

        const existingAdmin = await adminModel.findOne({ email });
        if (existingAdmin) {
            return res.status(409).json({ message: "Admin already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new adminModel({
            email,
            password: hashedPassword,
            firstName,
            lastName
        });

        await newAdmin.save();
        const token = jwt.sign({ id: newAdmin._id }, JWT_SECRET);
        res.json({ message: "Admin registered successfully", token });
    } catch (err) {
        res.status(400).json({ message: "Signup failed", error: err.message });
    }
});


adminRouter.post("/signin", async (req, res) => {
    try {
        const { email, password } = signinSchema.parse(req.body);

        const admin = await adminModel.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // const token = jwt.sign({ email }, JWT_SECRET);
        const token = jwt.sign({ id: admin._id}, JWT_SECRET);

        res.json({ message: "Signin successful", token });
    } catch (err) {
        res.status(400).json({ message: "Signin failed", error: err.message });
    }
});


adminRouter.post("/course", adminMiddleware, async (req, res) => {
    try {
        const adminId = req.userId;

        const { title, description, imageUrl, price } = req.body;

        const course = await courseModel.create({
            title,
            description,
            imageUrl: imageUrl,
            price,
            creatorId: adminId
        });

        res.json({
            message: "course created",
            courseId: course._id
        });
    } catch (err) {
        res.status(400).json({
            message: "course creation failed",
            error: err.message
        });
    }
});


adminRouter.put("/course", adminMiddleware, async (req, res) => {
    try {
        const adminId = req.userId;

        const { courseId, title, description, imageUrl, price } = req.body;

        if (!courseId) {
            return res.status(400).json({ message: "Missing courseId in request body" });
        }

        const course = await courseModel.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        if (course.creatorId.toString() !== adminId) {
            return res.status(403).json({ message: "You can only update your own courses" });
        }

        const updateData = {};
        if (title) updateData.title = title;
        if (description) updateData.description = description;
        if (imageUrl) updateData.imageUrl = imageUrl;
        if (price !== undefined) updateData.price = price;

        await courseModel.findByIdAndUpdate(courseId, updateData);

        res.json({ message: "Course updated successfully" });
    } catch (err) {
        res.status(500).json({ message: "Course update failed", error: err.message });
    }

});


adminRouter.get("/bulk", (req, res) => {
    res.json({
        message: "admin endpoint"
    })
});

module.exports = {
    adminRouter: adminRouter
}
