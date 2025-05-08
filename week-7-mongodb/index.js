const express = require("express");
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");


mongoose.connect(
  "mongodb+srv://mehirk28:Mehirkumar2004$@cluster0.eevp7ak.mongodb.net/todo-app-database"
);

JWT_SECRET = "your_jwt_secret_key";

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(50),
        password: z.string().min(3).max(50)
    })
    // const parsedData = requireBody.parse(req.body);
    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        return res.status(400).json({
            message: "Invalid data",
            error: parsedDataWithSuccess.error.format()
        })
    }
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    let errorThrown = false;

    try {
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);

    await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
  } catch (e) {
    res.json({ message: "User already exists" });
    errorThrown = true;
  }

  if (!errorThrown) {
    res.json({
      message: "You are Signed up in!",
    });
  }
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  });

  if (!user) {
    return res.status(403).json({
      message: "The user does not exist",
    });
  }

  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    const token = jwt.sign(
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

  try {
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
      req.userId = decodedData.id;
      next();
    }
  } catch (e) {
    res.status(403).json({
      message: "Invalid token",
    });
  }
}

app.listen(3000);
