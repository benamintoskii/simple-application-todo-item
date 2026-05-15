const express = require('express');
const cors = require('cors');

const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());

const items = [
  {
    id: 1,
    name: "2026 MacBook Neo 13-inch",
    description: "The next generation of thin and light computing, featuring a custom ARM-based processor for unparalleled speed and battery life.",
    images: [
      "/assets/images/macbook_1.jpg",
      "/assets/images/macbook_2.jpg",
      "/assets/images/macbook_3.jpg"
    ]
  },
  {
    id: 2,
    name: "Adidas Classic T-Shirt",
    description: "Comfortable, stylish, and made from 100% organic cotton. This iconic t-shirt is perfect for both workouts and casual outings.",
    images: [
      "/assets/images/adidas_1.jpg",
      "/assets/images/adidas_2.jpg",
      "/assets/images/adidas_3.jpg"
    ]
  },
  {
    id: 3,
    name: "Antique Turkish helmet",
    description: "A rare and beautiful Antique Turkish helmet featuring intricate metalwork and historical significance.",
    images: [
      "/assets/images/helmet_1.jpg",
      "/assets/images/helmet_2.jpg",
      "/assets/images/helmet_3.jpg"
    ]
  },
  {
    id: 4,
    name: "Professional Drawing Tools Set",
    description: "A comprehensive set of high-quality pencils, charcoals, and sketching accessories for artists of all levels.",
    images: [
      "/assets/images/drawing_1.jpg",
      "/assets/images/drawing_2.jpg",
      "/assets/images/drawing_3.jpg"
    ]
  },
  {
    id: 5,
    name: "Hall and office for business",
    description: "Modern hall and office environment for business, featuring spacious design and ergonomic settings.",
    images: [
      "/assets/images/office_1.jpg",
      "/assets/images/office_2.jpg",
      "/assets/images/office_3.jpg"
    ]
  },
  {
    id: 6,
    name: "Rolex Submariner Watch",
    description: "The ultimate luxury diving watch, crafted with precision and elegance. Water-resistant and built to last a lifetime.",
    images: [
      "/assets/images/rolex_1.jpg",
      "/assets/images/rolex_2.jpg",
      "/assets/images/rolex_3.jpg"
    ]
  },
  {
    id: 7,
    name: "prom",
    description: "Elegant prom dance event featuring beautiful dresses, great music, and unforgettable memories.",
    images: [
      "/assets/images/prom_1.jpg",
      "/assets/images/prom_2.jpg",
      "/assets/images/prom_3.jpg"
    ]
  },
  {
    id: 8,
    name: "Educational Wooden Children's Toy",
    description: "A colorful, engaging wooden puzzle toy designed to develop motor skills and cognitive abilities in toddlers.",
    images: [
      "/assets/images/toy_1.jpg",
      "/assets/images/toy_2.jpg",
      "/assets/images/toy_3.jpg"
    ]
  },
  {
    id: 9,
    name: "American football",
    description: "Pro performance American football for NFL games, featuring ultimate grip and durability.",
    images: [
      "/assets/images/football_1.jpg",
      "/assets/images/football_2.jpg",
      "/assets/images/football_3.jpg"
    ]
  }
];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Backend server running at http://127.0.0.1:${port}`);
});
