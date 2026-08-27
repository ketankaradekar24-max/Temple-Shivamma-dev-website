const express = require("express");
const router = express.Router();

const PoojaBooking = require("../models/PoojaBooking");

// ==========================================
// CREATE POOJA BOOKING
// ==========================================
router.post("/", async (req, res) => {
    try {
        const { devoteeName, phone, pooja, date } = req.body;

        // Validation
        if (!devoteeName || !phone || !pooja || !date) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        if (devoteeName.trim().length < 2) {
            return res.status(400).json({
                success: false,
                message: "Devotee name must contain at least 2 characters"
            });
        }

        const cleanPhone = String(phone).replace(/\D/g, "");

        if (cleanPhone.length !== 10) {
            return res.status(400).json({
                success: false,
                message: "Enter a valid 10-digit phone number"
            });
        }

   let bookingDate;

if (/^\d{2}-\d{2}-\d{4}$/.test(date)) {
  const [day, month, year] = date.split("-").map(Number);
  bookingDate = new Date(year, month - 1, day);
} else {
  bookingDate = new Date(date);
}

if (Number.isNaN(bookingDate.getTime())) {
  return res.status(400).json({
    success: false,
    message: "Invalid booking date",
  });
}
        

      
     // Prevent past bookings
const today = new Date();
today.setHours(0, 0, 0, 0);

bookingDate.setHours(0, 0, 0, 0);

if (bookingDate < today) {
  return res.status(400).json({
    success: false,
    message: "Booking date cannot be in the past"
  });
}

        const booking = new PoojaBooking({
            devoteeName: devoteeName.trim(),
            phone: cleanPhone,
            pooja: pooja.trim(),
            date: bookingDate
        });

        const savedBooking = await booking.save();

        return res.status(201).json({
            success: true,
            message: "Pooja booking created successfully",
            booking: savedBooking
        });

    } catch (error) {
        console.error("Create booking error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to create pooja booking"
        });
    }
});

// ==========================================
// GET ALL POOJA BOOKINGS
// ==========================================
router.get("/", async (req, res) => {
    try {
        const bookings = await PoojaBooking
            .find()
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: bookings.length,
            bookings
        });

    } catch (error) {
        console.error("Fetch bookings error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch pooja bookings"
        });
    }
});

// ==========================================
// GET SINGLE BOOKING
// ==========================================
router.get("/:id", async (req, res) => {
    try {
        const booking = await PoojaBooking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        return res.status(200).json({
            success: true,
            booking
        });

    } catch (error) {
        console.error("Fetch booking error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch booking"
        });
    }
});

// ==========================================
// DELETE BOOKING
// ==========================================
router.delete("/:id", async (req, res) => {
    try {
        const booking = await PoojaBooking.findByIdAndDelete(req.params.id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Pooja booking deleted successfully"
        });

    } catch (error) {
        console.error("Delete booking error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to delete booking"
        });
    }
});

module.exports = router;