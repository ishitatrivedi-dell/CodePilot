import mongoose, { Schema } from "mongoose";

const optionSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    _id: false, // Prevent Mongoose from creating a separate _id field for options
  }
);

const questionSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    options: {
      type: [optionSchema],
      required: true,
      validate: {
        validator: function (options) {
          // Ensure at least one option is marked as correct
          return options.some((option) => option.isCorrect);
        },
        message: "At least one option must be marked as correct.",
      },
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Question = mongoose.model("Question", questionSchema);