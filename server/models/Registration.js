import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unigue: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  workshop: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
