import express from "express";
import {
  getArtists,
  getArtistById,
} from "../controllers/artist.controller.js";

const router = express.Router();

// GET /api/artists
router.get("/", getArtists);

// GET /api/artists/:id
router.get("/:id", getArtistById);

export default router;
