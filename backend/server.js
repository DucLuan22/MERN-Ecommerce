const dotenv = require("dotenv").config({ path: "../config.env" });
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const connectDB = require("./configs/db");
const ErrorHandler = require("./middlewares/errorHandler");
//Connect to Database
connectDB();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//Running server
const server = app.listen(PORT, () => {
  console.log("Running on port", PORT);
});

//Routes
app.use("/api/auth", require("./routes/authUserRoutes"));
// app.use("/api/store", require("./routes/storeRoutes"));

//ErrorHandler
app.use(ErrorHandler);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
