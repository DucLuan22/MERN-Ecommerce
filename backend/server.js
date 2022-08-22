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
app.use("/admin/product/", require("./routes/adminProductRoutes"));
app.use("/admin/category/", require("./routes/adminCategoryRoutes"));
app.use("/admin/brand/", require("./routes/adminBrandRoutes"));
app.use("/api/user/", require("./routes/userRoutes"));

//ErrorHandler
app.use(ErrorHandler);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
