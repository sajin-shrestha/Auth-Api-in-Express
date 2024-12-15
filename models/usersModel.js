import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: [true, "Email already in use. Email must be unique"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Password cannot be empty'],
    trim: true,
    minLength: [8, "Password must have 8 character"],
    select: false, // when we perform get request for users, password shoould not be fetched from database
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    select: false,
  },
  verificationCodeValidation: {
    type: Number,
    select: false,
  },
  forgotPasswordCode: {
    type: String,
    select: false,
  },
  forgotPasswordCodeValidation: {
    type: Number,
    select: false,
  },
}, {
  timestamps: true,
})

// module.exports = mongoose.model('User', userSchema)
export default mongoose.model('User', userSchema)
