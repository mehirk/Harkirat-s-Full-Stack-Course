const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(3000);
        console.log("Connection Successful, listening on port 3000");
    } catch (e) {
        console.log("MongoDB Connection Error", err);
    }
}

main()