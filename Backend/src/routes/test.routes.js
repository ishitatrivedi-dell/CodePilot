import express from "express";
import {
  createAttemptedTest,
  getAllAttemptedTests,
  getAttemptedTestsByUser,
  updateAttemptedTest,
  deleteAttemptedTest,
} from "../controllers/test.controller.js";

const router = express.Router();

// Attempted Tests routes
router.post("/create", createAttemptedTest);
router.get("/show", getAllAttemptedTests);
router.get("/show/user/:userId", getAttemptedTestsByUser);
router.put("/update/:id", updateAttemptedTest);
router.delete("/delete/:id", deleteAttemptedTest);

export default router;