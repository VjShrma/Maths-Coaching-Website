const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const authMiddleware = require("../middleware/authMiddleware");

// POST /api/feedback: public, anyone can send feedback
router.post("/", async (req, res) => {
  try {
    const { name, rating, message, canPublish } = req.body;
    const ratingNum = Number(rating);

    if (!name || !message || !Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return res.status(400).json({
        success: false,
        message: "Please provide your name, a rating from 1 to 5, and your feedback.",
      });
    }

    const feedback = await Feedback.create({
      name,
      rating: ratingNum,
      message,
      canPublish: Boolean(canPublish),
    });

    res.status(201).json({ success: true, message: "Thank you for your feedback!", data: { id: feedback._id } });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ success: false, message: Object.values(error.errors)[0].message });
    }
    console.error("Error saving feedback:", error);
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
});

// GET /api/feedback: admin only
router.get("/", authMiddleware, async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });
    const count = feedback.length;
    const averageRating = count
      ? Math.round((feedback.reduce((sum, f) => sum + f.rating, 0) / count) * 10) / 10
      : 0;
    res.json({ success: true, count, averageRating, data: feedback });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;