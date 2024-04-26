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
    questions: [
      {
        question: {
          type: Schema.Types.ObjectId,
          ref: "Question",
          required: true,
        },
        selectedChoice: {
          type: String,
          required: true,
        },
      },
    ],
    score: {
      type: Number,
      required: true,
      default: 0,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    startedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    completedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const AttemptedTest = mongoose.model("AttemptedTest", attemptedTestSchema);