const express = require("express");
const router = express.Router();
const Donation = require("../models/Donation");

// GET all donations
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      donations,
    });
  } catch (error) {
    console.error("Error fetching donations:", error);

    res.status(500).json({
      success: false,
      message: "Failed to load donations",
    });
  }
});

// POST new donation
router.post("/", async (req, res) => {
  try {
    const { donorName, phone, amount, purpose } = req.body;

    if (!donorName || !phone || !amount || !purpose) {
      return res.status(400).json({
        success: false,
        message: "All donation details are required",
      });
    }

    const donation = new Donation({
      donorName,
      phone,
      amount: Number(amount),
      purpose,
    });

    const savedDonation = await donation.save();

    res.status(201).json({
      success: true,
      message: "Donation added successfully",
      donation: savedDonation,
    });
  } catch (error) {
    console.error("Error adding donation:", error);

    res.status(500).json({
      success: false,
      message: "Failed to add donation",
    });
  }
});

module.exports = router;