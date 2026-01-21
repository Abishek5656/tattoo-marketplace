import express from "express";
import cors from "cors";
import artistRoutes from "./routes/artist.routes.js";
import bookingRoutes from "./routes/booking.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/artists", artistRoutes);
app.use("/api/bookings", bookingRoutes);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

export default app;
