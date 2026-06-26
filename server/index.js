const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const enquiryRoutes = require("./routes/enquiry");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/enquiry", enquiryRoutes);
app.use("/api/auth", authRoutes);

app.post("/test", (req, res) => {
  res.json({ message: "test works" });
});

app.get("/", (req, res) => {
  res.json({ message: "Maths Coaching API is running!" });
});

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });