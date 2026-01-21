import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Artist from "../models/artist.model.js";

dotenv.config();

connectDB();

const sampleArtists = [
  {
    name: "Aisha Verma",
    bio: "Contemporary painter working with mixed media and found objects.",
    studioName: "Studio Aisha",
    styles: ["Contemporary", "Abstract", "Mixed Media"],
    location: "Bengaluru, India",
    portfolio: [
      { imageUrl: "https://picsum.photos/seed/aisha1/800/600", alt: "Mixed media piece" },
      { imageUrl: "https://picsum.photos/seed/aisha2/800/600", alt: "Abstract canvas" },
    ],
  },
  {
    name: "Mateo Rios",
    bio: "Illustrator and muralist focused on urban narratives and color.",
    studioName: "Rios Creative",
    styles: ["Illustration", "Mural", "Street Art"],
    location: "Mexico City, Mexico",
    portfolio: [
      { imageUrl: "https://picsum.photos/seed/mateo1/800/600", alt: "Mural close-up" },
    ],
  },
  {
    name: "Sophie Laurent",
    bio: "Photographer exploring identity and everyday life.",
    studioName: "Lumière Studio",
    styles: ["Photography", "Portrait"],
    location: "Paris, France",
    portfolio: [
      { imageUrl: "https://picsum.photos/seed/sophie1/800/600", alt: "Portrait sample" },
      { imageUrl: "https://picsum.photos/seed/sophie2/800/600", alt: "Street photo" },
    ],
  },
  {
    name: "Oluwaseun Adeyemi",
    bio: "Textile artist blending traditional weaving with contemporary patterns.",
    studioName: "Adeyemi Textiles",
    styles: ["Textiles", "Craft"],
    location: "Lagos, Nigeria",
    portfolio: [
      { imageUrl: "https://picsum.photos/seed/oluwaseun1/800/600", alt: "Woven textile" },
    ],
  },
  {
    name: "Emily Chen",
    bio: "Ceramicist making functional forms with sculptural details.",
    studioName: "Chen Ceramics",
    styles: ["Ceramics"],
    location: "Vancouver, Canada",
    portfolio: [
      { imageUrl: "https://picsum.photos/seed/emily1/800/600", alt: "Handmade bowl" },
    ],
  },
  {
    name: "Luis Fernandez",
    bio: "Sculptor working in metal and reclaimed materials.",
    studioName: "Fernandez Metalworks",
    styles: ["Sculpture", "Assemblage"],
    location: "Buenos Aires, Argentina",
    portfolio: [
      { imageUrl: "https://picsum.photos/seed/luis1/800/600", alt: "Metal sculpture" },
    ],
  },
  {
    name: "Hannah Kim",
    bio: "Painter combining traditional brushwork with digital workflows.",
    studioName: "Kim Atelier",
    styles: ["Painting", "Digital"],
    location: "Seoul, South Korea",
    portfolio: [
      { imageUrl: "https://picsum.photos/seed/hannah1/800/600", alt: "Canvas detail" },
    ],
  },
  {
    name: "Noah Johnson",
    bio: "Printmaker with a focus on linocut and small-batch editions.",
    studioName: "Northprint",
    styles: ["Printmaking"],
    location: "Portland, USA",
    portfolio: [
      { imageUrl: "https://picsum.photos/seed/noah1/800/600", alt: "Linocut print" },
    ],
  },
  {
    name: "Maya Singh",
    bio: "Multidisciplinary artist working between video and installation.",
    studioName: "Maya Works",
    styles: ["Video", "Installation"],
    location: "Mumbai, India",
    portfolio: [
      { imageUrl: "https://picsum.photos/seed/maya1/800/600", alt: "Installation view" },
    ],
  },
  {
    name: "Anton Petrov",
    bio: "Graphic designer and type enthusiast exploring experimental typography.",
    studioName: "Petrov Studio",
    styles: ["Graphic Design", "Typography"],
    location: "Moscow, Russia",
    portfolio: [
      { imageUrl: "https://picsum.photos/seed/anton1/800/600", alt: "Typography sample" },
    ],
  },
];

const seedArtists = async () => {
  try {
    // Clear existing artists
    await Artist.deleteMany();

    // Insert sample artists
    const created = await Artist.insertMany(sampleArtists);
    console.log(`Inserted ${created.length} artists`);
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedArtists();
