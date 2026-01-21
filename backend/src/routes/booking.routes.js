import express from "express";
import {
  createBooking,
  getBookingsByArtist,
} from "../controllers/booking.controller.js";

const router = express.Router();

// POST /api/bookings
router.post("/", createBooking);

// GET /api/bookings?artistId=ARTIST_ID
router.get("/", getBookingsByArtist);

export default router;
