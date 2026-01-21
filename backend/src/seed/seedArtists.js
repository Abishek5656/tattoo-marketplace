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
      {
        imageUrl: "https://picsum.photos/seed/aisha1/800/600",
        alt: "Mixed media piece",
      },
      {
        imageUrl: "https://picsum.photos/seed/aisha2/800/600",
        alt: "Abstract canvas",
      },
    ],
  },
  {
    name: "Mateo Rios",
    bio: "Illustrator and muralist focused on urban narratives and color.",
    studioName: "Rios Creative",
    styles: ["Illustration", "Mural", "Street Art"],
    location: "Mexico City, Mexico",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/mateo1/800/600",
        alt: "Mural close-up",
      },
    ],
  },
  {
    name: "Sophie Laurent",
    bio: "Photographer exploring identity and everyday life.",
    studioName: "Lumière Studio",
    styles: ["Photography", "Portrait"],
    location: "Paris, France",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/sophie1/800/600",
        alt: "Portrait sample",
      },
      {
        imageUrl: "https://picsum.photos/seed/sophie2/800/600",
        alt: "Street photo",
      },
    ],
  },
  {
    name: "Oluwaseun Adeyemi",
    bio: "Textile artist blending traditional weaving with contemporary patterns.",
    studioName: "Adeyemi Textiles",
    styles: ["Textiles", "Craft"],
    location: "Lagos, Nigeria",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/oluwaseun1/800/600",
        alt: "Woven textile",
      },
    ],
  },
  {
    name: "Emily Chen",
    bio: "Ceramicist making functional forms with sculptural details.",
    studioName: "Chen Ceramics",
    styles: ["Ceramics"],
    location: "Vancouver, Canada",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/emily1/800/600",
        alt: "Handmade bowl",
      },
    ],
  },
  {
    name: "Luis Fernandez",
    bio: "Sculptor working in metal and reclaimed materials.",
    studioName: "Fernandez Metalworks",
    styles: ["Sculpture", "Assemblage"],
    location: "Buenos Aires, Argentina",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/luis1/800/600",
        alt: "Metal sculpture",
      },
    ],
  },
  {
    name: "Hannah Kim",
    bio: "Painter combining traditional brushwork with digital workflows.",
    studioName: "Kim Atelier",
    styles: ["Painting", "Digital"],
    location: "Seoul, South Korea",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/hannah1/800/600",
        alt: "Canvas detail",
      },
    ],
  },
  {
    name: "Noah Johnson",
    bio: "Printmaker with a focus on linocut and small-batch editions.",
    studioName: "Northprint",
    styles: ["Printmaking"],
    location: "Portland, USA",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/noah1/800/600",
        alt: "Linocut print",
      },
    ],
  },
  {
    name: "Maya Singh",
    bio: "Multidisciplinary artist working between video and installation.",
    studioName: "Maya Works",
    styles: ["Video", "Installation"],
    location: "Mumbai, India",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/maya1/800/600",
        alt: "Installation view",
      },
    ],
  },
  {
    name: "Anton Petrov",
    bio: "Graphic designer and type enthusiast exploring experimental typography.",
    studioName: "Petrov Studio",
    styles: ["Graphic Design", "Typography"],
    location: "Moscow, Russia",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/anton1/800/600",
        alt: "Typography sample",
      },
    ],
  },
  {
    name: "Ravi Malhotra",
    bio: "Tattoo artist specializing in fine-line and minimal designs.",
    studioName: "Inkline Studio",
    styles: ["Fine Line", "Minimal"],
    location: "Delhi, India",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/ravi1/800/600",
        alt: "Minimal line tattoo",
      },
    ],
  },
  {
    name: "Clara Müller",
    bio: "Illustrator focused on botanical and nature-inspired artwork.",
    studioName: "Flora Lines",
    styles: ["Illustration", "Botanical"],
    location: "Berlin, Germany",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/clara1/800/600",
        alt: "Botanical illustration",
      },
    ],
  },
  {
    name: "Javier Morales",
    bio: "Tattoo artist known for bold traditional designs and heavy color.",
    studioName: "Old Soul Tattoo",
    styles: ["Traditional", "Color"],
    location: "Madrid, Spain",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/javier1/800/600",
        alt: "Traditional tattoo flash",
      },
    ],
  },
  {
    name: "Ananya Rao",
    bio: "Fine artist blending classical Indian motifs with modern composition.",
    studioName: "Ananya Art House",
    styles: ["Fine Art", "Contemporary"],
    location: "Chennai, India",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/ananya1/800/600",
        alt: "Modern Indian artwork",
      },
      {
        imageUrl: "https://picsum.photos/seed/tyler1/800/600",
        alt: "Geometric blackwork tattoo",
      },
      {
        imageUrl: "https://picsum.photos/seed/isabella1/800/600",
        alt: "Mixed media collage",
      },
      {
        imageUrl: "https://picsum.photos/seed/emily1/800/600",
        alt: "Handmade bowl",
      },
    ],
  },
  {
    name: "Tyler Brooks",
    bio: "Blackwork tattoo artist inspired by geometry and symbolism.",
    studioName: "Void Ink",
    styles: ["Blackwork", "Geometric"],
    location: "Austin, USA",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/tyler1/800/600",
        alt: "Geometric blackwork tattoo",
      },
    ],
  },
  {
    name: "Isabella Romano",
    bio: "Visual artist working with collage and mixed techniques.",
    studioName: "Studio Romano",
    styles: ["Collage", "Mixed Media"],
    location: "Rome, Italy",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/isabella1/800/600",
        alt: "Mixed media collage",
      },
      {
        imageUrl: "https://picsum.photos/seed/emily1/800/600",
        alt: "Handmade bowl",
      },
      {
        imageUrl: "https://picsum.photos/seed/emily1/800/600",
        alt: "Handmade bowl",
      },
    ],
  },
  {
    name: "Kaito Nakamura",
    bio: "Tattoo artist specializing in Japanese irezumi and mythological themes.",

    studioName: "Ryū Ink",
    styles: ["Japanese", "Irezumi"],
    location: "Osaka, Japan",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/kaito1/800/600",
        alt: "Japanese style tattoo",
      },
      {
        imageUrl: "https://picsum.photos/seed/tyler1/800/600",
        alt: "Geometric blackwork tattoo",
      },
      {
        imageUrl: "https://picsum.photos/seed/isabella1/800/600",
        alt: "Mixed media collage",
      },
    ],
  },
  {
    name: "Fatima Al Noor",
    bio: "Calligraphy artist blending Arabic scripts with modern design.",
    studioName: "Noor Calligraphy",
    styles: ["Calligraphy", "Typography"],
    location: "Dubai, UAE",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/fatima1/800/600",
        alt: "Arabic calligraphy artwork",
      },
      {
        imageUrl: "https://picsum.photos/seed/emily1/800/600",
        alt: "Handmade bowl",
      },
    ],
  },
  {
    name: "Lucas Pereira",
    bio: "Tattoo artist focused on realism portraits and micro-detailing.",
    studioName: "Real Ink",
    styles: ["Realism", "Portrait"],
    location: "São Paulo, Brazil",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/lucas1/800/600",
        alt: "Realism portrait tattoo",
      },
      {
        imageUrl: "https://picsum.photos/seed/tyler1/800/600",
        alt: "Geometric blackwork tattoo",
      },
      {
        imageUrl: "https://picsum.photos/seed/isabella1/800/600",
        alt: "Mixed media collage",
      },
    ],
  },
  {
    name: "Zara Khan",
    bio: "Digital artist creating surreal visuals and concept art.",
    studioName: "ZK Visuals",
    styles: ["Digital Art", "Surreal"],
    location: "Karachi, Pakistan",
    portfolio: [
      {
        imageUrl: "https://picsum.photos/seed/zara1/800/600",
        alt: "Surreal digital artwork",
      },
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
