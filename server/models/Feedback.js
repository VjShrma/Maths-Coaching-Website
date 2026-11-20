const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, "Name: is required"], trim: true, maxlength: 80 },
        rating: { type: Number, required: [true, "Rating is required"], min: 1, max: 5},
        message: { type: String, required: [true, "Feedback is required"], trim: true, minlength: 10, maxlength: 1000},
        canPublish: { type: Boolean, default: false },
    },
    {timestamp: true}
);

module.exports = mongoose.model("Feedback", feedbackSchema);