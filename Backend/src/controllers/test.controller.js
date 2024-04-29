import { AttemptedTest } from "../models/test.model.js";

// Create a new attempted test
export const createAttemptedTest = async (req, res) => {
  try {
    const { user, testName, questions, totalQuestions } = req.body;

    const newAttemptedTest = new AttemptedTest({
      user,
      testName,
      questions,
      totalQuestions,
    });

    await newAttemptedTest.save();
    res.status(201).json(newAttemptedTest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all attempted tests
export const getAllAttemptedTests = async (req, res) => {
  try {
    const attemptedTests = await AttemptedTest.find();
    res.status(200).json(attemptedTests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get attempted tests by user
export const getAttemptedTestsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const attemptedTests = await AttemptedTest.find({ user: userId });

    if (attemptedTests.length === 0) {
      return res.status(404).json({ error: "No attempted tests found for this user" });
    }

    res.status(200).json(attemptedTests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an attempted test
export const updateAttemptedTest = async (req, res) => {
  try {
    const { questions, score, completedAt } = req.body;

    const updatedAttemptedTest = await AttemptedTest.findByIdAndUpdate(
      req.params.id,
      { questions, score, completedAt },
      { new: true }
    );

    if (!updatedAttemptedTest) {
      return res.status(404).json({ error: "Attempted test not found" });
    }

    res.status(200).json(updatedAttemptedTest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an attempted test
export const deleteAttemptedTest = async (req, res) => {
  try {
    const deletedAttemptedTest = await AttemptedTest.findByIdAndDelete(req.params.id);

    if (!deletedAttemptedTest) {
      return res.status(404).json({ error: "Attempted test not found" });
    }

    res.status(200).json({ message: "Attempted test deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};