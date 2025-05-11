const { Router } = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const userRouter = Router();

const JWT_SECRET = process.env.JWT_USER_PASSWORD;

const signupSchema = z.object({
    email: z.string().email().min(2).max(30),
    password: z.string().min(8).max(50),
    firstName: z.string().min(1).max(50),
    lastName: z.string().min(1).max(50)
});

const signinSchema = z.object({
    email: z.string().email().min(2).max(30),
    password: z.string().min(8).max(50)
});


userRouter.post("/signup", async (req, res) => {
    try {
        const { email, password, firstName, lastName } = signupSchema.parse(req.body);

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ email, password: hashedPassword, firstName, lastName });
        await newUser.save();

        const token = jwt.sign({ email }, JWT_SECRET);
        res.json({ message: "User registered successfully", token });
    } catch (err) {
        res.status(400).json({ message: "Signup failed", error: err.message });
    }
});


userRouter.post("/signup", async (req, res) => {
    try {
        const { email, password, firstName, lastName } = signupSchema.parse(req.body);

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ email, password: hashedPassword, firstName, lastName });
        await newUser.save();

        const token = jwt.sign({ email }, JWT_SECRET);
        res.json({ message: "User registered successfully", token });
    } catch (err) {
        res.status(400).json({ message: "Signup failed", error: err.message });
    }
});


userRouter.get("/purchases", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
});

module.exports = {
    userRouter: userRouter
}