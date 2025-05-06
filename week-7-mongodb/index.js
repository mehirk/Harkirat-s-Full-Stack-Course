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

app.post("/todo", auth, (req, res) => {
  const userId = req.userId;

  res.json({
    userId: userId,
  });
});

app.get("/todos", auth, (req, res) => {
  const userId = req.userId;
  res.json({
    userId: userId,
  });
});

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Invalid token",
    });
  }
}

app.listen(3000);
