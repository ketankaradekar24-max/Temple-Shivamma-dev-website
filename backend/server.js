require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const poojaBookingRoutes = require("./routes/poojaBooking");
const dashboardStatsRoutes = require("./routes/dashboardStats");
const eventRoutes = require("./routes/Event");
const donationRoutes = require("./routes/donation");

const app = express();

// ==========================================
// MIDDLEWARE
// ==========================================

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// ==========================================
// HEALTH CHECK
// ==========================================

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Temple Management Backend is running!",
    });
});

// ==========================================
// API ROUTES
// ==========================================

app.use("/api/pooja-bookings", poojaBookingRoutes);
app.use("/api/dashboard", dashboardStatsRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/donations", donationRoutes);


// ==========================================
// 404 HANDLER
// ==========================================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API endpoint not found",
    });
});

// ==========================================
// GLOBAL ERROR HANDLER
// ==========================================

app.use((err, req, res, next) => {
    console.error("Server Error:", err);

    res.status(err.status || 500).json({
        success: false,
        message: "Internal server error",
    });
});

// ==========================================
// START SERVER
// ==========================================

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Backend running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

if (require.main === module) {
  startServer();
}

module.exports = app;

// ==========================================
// GRACEFUL SHUTDOWN
// ==========================================

process.on("SIGTERM", () => {
    console.log("SIGTERM received. Shutting down...");
    process.exit(0);
});

process.on("SIGINT", () => {
    console.log("SIGINT received. Shutting down...");
    process.exit(0);
});
