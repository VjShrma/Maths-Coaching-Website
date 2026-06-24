// server/routes/enquiry.js
const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");
 
// POST /api/enquiry — save new enquiry
router.post("/", async (req, res) => {
  try {
    const { studentName, parentName, phone, className, board, message } = req.body;
 
    // Basic validation
    if (!studentName || !parentName || !phone || !className || !board) {
      return res.status(400).json({ success: false, message: "Please fill all required fields" });
    }
 
    const enquiry = new Enquiry({
      studentName,
      parentName,
      phone,
      className,
      board,
      message,
    });
 
    await enquiry.save();
 
    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully!",
      data: enquiry,
    });
  } catch (error) {
    console.error("Error saving enquiry:", error);
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
});
 
// GET /api/enquiry — view all enquiries (admin use)
router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});
 
module.exports = router;