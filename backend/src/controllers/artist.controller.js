import Artist from "../models/artist.model.js";

/**
 * @desc    Get all artists
 * @route   GET /api/artists
 * @access  Public
 */
export const getArtists = async (req, res) => {
  try {
    const artists = await Artist.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: artists.length,
      data: artists,
    });
  } catch (error) {
    console.error("Error fetching artists:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch artists",
    });
  }
};

/**
 * @desc    Get artist by ID
 * @route   GET /api/artists/:id
 * @access  Public
 */
export const getArtistById = async (req, res) => {
  try {
    const { id } = req.params;

    const artist = await Artist.findById(id);

    if (!artist) {
      return res.status(404).json({
        success: false,
        message: "Artist not found",
      });
    }

    res.status(200).json({
      success: true,
      data: artist,
    });
  } catch (error) {
    console.error("Error fetching artist:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch artist",
    });
  }
};
