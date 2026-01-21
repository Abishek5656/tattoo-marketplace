import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    studioName: {
      type: String,
      trim: true,
    },
    styles: {
      type: [String],
      default: [],
    },
    location: {
      type: String,
      trim: true,
    },
    portfolio: {
      type: [portfolioSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Artist = mongoose.model("Artist", artistSchema);

export default Artist;
