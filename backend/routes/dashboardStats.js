const express = require("express");
const router = express.Router();

const PoojaBooking = require("../models/PoojaBooking");
const Rating = require("../models/Rating");
const Donation = require("../models/Donation");

router.get("/stats", async (req, res) => {
  try {
    // ==============================
    // TODAY'S DATE RANGE
    // ==============================
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    // ==============================
    // TOTAL BOOKINGS
    // ==============================
    const totalBookings = await PoojaBooking.countDocuments();

    // ==============================
    // TODAY'S POOJAS
    // ==============================
    const todayPoojas = await PoojaBooking.countDocuments({
      date: {
        $gte: startOfToday,
        $lte: endOfToday,
      },
    });

    // ==============================
    // UNIQUE DEVOTEES
    // ==============================
    const uniqueDevotees = await PoojaBooking.distinct("devoteeName");

    const devotees = uniqueDevotees.filter(
      (name) => name && name.trim().length > 0
    ).length;

    // ==============================
    // RECENT BOOKINGS
    // ==============================
    const recentBookings = await PoojaBooking.find()
      .sort({ createdAt: -1, date: -1 })
      .limit(5)
      .select("devoteeName pooja date status createdAt");

    // ==============================
    // RATINGS
    // ==============================
    const totalRatings = await Rating.countDocuments();

    const ratingResult = await Rating.aggregate([
      {
        $group: {
          _id: null,
          averageRating: {
            $avg: "$rating",
          },
        },
      },
    ]);

    const averageRating =
      ratingResult.length > 0
        ? Number(ratingResult[0].averageRating.toFixed(1))
        : 0;

    // ==============================
    // RESPONSE
    // ==============================

    const donationResult = await Donation.aggregate([
  {
    $group: {
      _id: null,
      total: { $sum: "$amount" }
    }
  }
]);

const donationTotal =
  donationResult.length > 0 ? donationResult[0].total : 0;
    res.status(200).json({
      success: true,

      totalBookings,
      todayPoojas,

      // These will be connected when
      // Event and Donation models are ready.
      upcomingEvents: 0,
      donationTotal,

      devotees,

      totalRatings,
      averageRating,

      recentBookings,
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to load dashboard statistics",
      error: error.message,
    });
  }
});

module.exports = router;