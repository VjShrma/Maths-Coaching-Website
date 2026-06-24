// server/Models/Enquiry.js
const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema (
  {
    studentName: {
        type: String,
        required: [true, "Student name is required"],
        trim: true,
    },

    parentName: {
        type: String,
        required: [true, "Parent name is required"],
        trim: true,
    },

    phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
    },

    className: {
        type: String,
        required: [true, "Board is required"],
        trim: true,
    },

    message: {
        type: String,
        trim: true,
        default: "",
    },

  },
    {
        timestamp: true, //add createAt and updateAt automatically
    }
);

module.exports = mongoose.model("Enquiry", enquirySchema);