const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const cors = require("cors");

const db = require('./config/database/index.db');
require("dotenv").config();


const app = express();
app.use(express.json())
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);

db.onConnection();

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

