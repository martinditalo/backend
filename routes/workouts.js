const express = require("express");

const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const Workout = require("../models/workoutModels");
const router = express.Router();

// Get All workouts
router.get("/", getWorkouts);

// Get a single workout
router.get("/:id", getWorkout);
// Post a new workout
router.post("/", createWorkout);
// Delete a workout
router.delete("/:id", deleteWorkout);
// Update a workout
router.patch("/:id", updateWorkout);
module.exports = router;
