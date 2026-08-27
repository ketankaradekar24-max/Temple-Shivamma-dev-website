const express = require("express");
const router = express.Router();

const Event = require("../models/Event");

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (error) {
    console.error("Events fetch error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load events",
      error: error.message,
    });
  }
});

// Create an event
router.post("/", async (req, res) => {
  try {
    const { title, description, date, location, status } = req.body;

    const event = await Event.create({
      title,
      description,
      date,
      location,
      status,
    });

    res.status(201).json(event);
  } catch (error) {
    console.error("Event creation error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create event",
      error: error.message,
    });
  }
});

module.exports = router;