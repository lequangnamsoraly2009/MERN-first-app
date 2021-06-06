const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
require("dotenv").config();

const connectDB = () => {
    try {
        //have async await here -> Dont forget
       mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-first-app.9equr.mongodb.net/mern-first-app`,
        {
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        }
      );
      console.log("MongoDB connected");
    } catch (error) {
      console.log(error.message);
    }
  };

connectDB();

const app = express();
app.use(express.json())

app.use("/api/auth", authRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

