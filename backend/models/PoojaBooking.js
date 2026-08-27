const mongoose = require("mongoose");

const poojaBookingSchema = new mongoose.Schema(
  {
    devoteeName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    pooja: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PoojaBooking", poojaBookingSchema);