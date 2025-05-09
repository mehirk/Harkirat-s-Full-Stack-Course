const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://mehirk28:Mehirkumar2004$@cluster0.eevp7ak.mongodb.net/todo-app-database")

app.post("/user/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
});


app.post("/user/signin", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
});


app.get("/user/purchases", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
});


app.post("/course/purchase", function(req, res) {
    // in real world, we would expect the user to pay you real money.
    res.json({
        message: "signup endpoint"
    })
});

app.get("/courses", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
});


app.listen(3000);