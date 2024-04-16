import mongoose, { Schema } from "mongoose";

const attemptedTestSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    testName: {
      type: String,
      required: true,
    },
    timeTaken: {
      type: Number,
      required: true, // Time taken in seconds
    },
    totalMarks: {
      type: Number,
      required: true,
    },
    marksObtained: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AttemptedTest = mongoose.model("AttemptedTest", attemptedTestSchema);

export default AttemptedTest;
