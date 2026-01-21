import Booking from "../models/booking.model.js";
import Artist from "../models/artist.model.js";
import { sendBookingEmail } from "../utils/emailService.js";

/**
 * @desc    Create a booking (Customer → Artist)
 * @route   POST /api/bookings
 * @access  Public
 */

export const createBooking = async (req, res) => {
  try {
    const { artistId, name, phone, email, preferredDate, message } = req.body;

    // 1. Basic validation
    if (!artistId || !name || !phone || !email || !preferredDate) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    // 2. Ensure artist exists
    const artist = await Artist.findById(artistId);
    if (!artist) {
      return res.status(404).json({
        success: false,
        message: "Artist not found",
      });
    }

    // 3. Create booking (DB persistence first)
    const booking = await Booking.create({
      artistId,
      name,
      phone,
      email,
      preferredDate,
      message,
    });

    // 4. Send confirmation email (NON-BLOCKING)
    try {
      await sendBookingEmail({
        to: email,
        customerName: name,
        artistName: artist.name,
        preferredDate,
        message,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError.message);
      // intentionally NOT failing booking
    }

    // 5. Respond to customer
    return res.status(201).json({
      success: true,
      message: "Booking request submitted successfully",
      data: {
        bookingId: booking._id,
        artistName: artist.name,
        preferredDate: booking.preferredDate,
        status: booking.status,
      },
    });
  } catch (error) {
    console.error("Create booking error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit booking",
    });
  }
};

/**
 * @desc    Get bookings for an artist
 * @route   GET /api/bookings?artistId=ID
 * @access  Public (MVP)
 */
export const getBookingsByArtist = async (req, res) => {
  try {
    const { artistId } = req.query;

    if (!artistId) {
      return res.status(400).json({
        success: false,
        message: "artistId is required",
      });
    }

    const bookings = await Booking.find({ artistId }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    console.error("Fetch bookings error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
    });
  }
};
