const express = require("express");
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

mongoose.connect(
  "mongodb+srv://mehirk28:Mehirkumar2004$@cluster0.eevp7ak.mongodb.net/todo-app-database"
);

JWT_SECRET = "your_jwt_secret_key";

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  await UserModel.create({
    name: name,
    email: email,
    password: password,
  });

  res.json({
    message: "You are Logged in!",
  });
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  console.log(user);

  if (user) {
    token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET
    );
    res.json({
      message: "You are Logged in!",
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Invalid email or password",
    });
  }
});

app.post("/todo", (req, res) => {});

app.get("/todos", (req, res) => {});

app.listen(3000);
