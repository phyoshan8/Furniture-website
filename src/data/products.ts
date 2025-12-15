import p1 from "@/data/images/p-1.webp";
import p2 from "@/data/images/p-2.webp";
import p3 from "@/data/images/p-3.webp";
import p4 from "@/data/images/p-4.webp";
import p5 from "@/data/images/p-5.webp";
import p6 from "@/data/images/p-6.webp";
import p7 from "@/data/images/p-7.webp";
import p8 from "@/data/images/p-8.webp";
export const filterList = {
  categories: [
    { id: "uuid1", label: "Wooden" },
    { id: "uuid2", label: "Bamboo" },
    { id: "uuid3", label: "Metal" },
  ],
  types: [
    { id: "uuid1", label: "seating" },
    { id: "uuid2", label: "lying" },
    { id: "uuid3", label: "entertainment" },
    { id: "uuid4", label: "tables" },
    { id: "uuid5", label: "storage" },
  ],
};
export const products = [
  {
    id: "uuid1",
    name: "Nordic Chair",
    description:
      "A stylish Nordic chair crafted from premium wood, perfect for living rooms or office spaces with minimalist design.",
    images: [p1, p4, p7],
    categoryId: "uuid1", // Wooden
    typeId: "uuid1", // Seating
    price: 230,
    discount: 0,
    rating: 4,
    inventory: 180,
    status: "active",
  },
  {
    id: "uuid2",
    name: "Kruzo Aero Chair",
    description:
      "Ergonomically designed Kruzo Aero chair with soft cushions and breathable fabric for long-lasting comfort.",
    images: [p2, p5, p8],
    categoryId: "uuid2", // Bamboo
    typeId: "uuid1", // Seating
    price: 180.85,
    discount: 200,
    rating: 3.5,
    inventory: 900,
    status: "active",
  },
  {
    id: "uuid3",
    name: "Ergonomic Chair",
    description:
      "Designed to support your posture, this ergonomic chair features adjustable height and lumbar support for all-day comfort.",
    images: [p3, p1, p6],
    categoryId: "uuid1", // Wooden
    typeId: "uuid1", // Seating
    price: 90,
    discount: 110,
    rating: 4,
    inventory: 90,
    status: "active",
  },
  {
    id: "uuid4",
    name: "Modern Coffee Table",
    description:
      "Sleek metal coffee table with a polished finish, ideal for contemporary living rooms.",
    images: [p4, p2, p7],
    categoryId: "uuid3", // Metal
    typeId: "uuid4", // Tables
    price: 1500,
    discount: 0,
    rating: 4,
    inventory: 100,
    status: "sold",
  },
  {
    id: "uuid5",
    name: "Lounge Daybed",
    description:
      "A comfortable lounge daybed for relaxing, with a sturdy wooden base and soft cushions.",
    images: [p5, p3, p8],
    categoryId: "uuid1", // Wooden
    typeId: "uuid2", // Lying
    price: 230,
    discount: 0,
    rating: 4,
    inventory: 180,
    status: "active",
  },
  {
    id: "uuid6",
    name: "Ergonomic Chair",
    description:
      "Premium ergonomic chair designed with adjustable armrests and breathable mesh to keep you cool during long work hours.",
    images: [p6, p2, p4],
    categoryId: "uuid1", // Wooden
    typeId: "uuid1", // Seating
    price: 140,
    discount: 150,
    rating: 3,
    inventory: 200,
    status: "sold",
  },
  {
    id: "uuid7",
    name: "Nordic Chair",
    description:
      "Classic Nordic chair with a minimalist design, combining solid metal construction and modern aesthetics.",
    images: [p7, p1, p3],
    categoryId: "uuid3", // Metal
    typeId: "uuid1", // Seating
    price: 210,
    discount: 0,
    rating: 4,
    inventory: 100,
    status: "active",
  },
  {
    id: "uuid8",
    name: "Bamboo Stool",
    description:
      "Simple, lightweight bamboo stool perfect for quick seating or as a small side table.",
    images: [p8, p4, p2],
    categoryId: "uuid2", // Bamboo
    typeId: "uuid1", // Seating
    price: 140,
    discount: 150,
    rating: 3,
    inventory: 200,
    status: "active",
  },
  {
    id: "uuid9",
    name: "Kruzo Aero Chair",
    description:
      "Sleek Kruzo Aero chair with durable wooden materials and stylish design, suitable for modern dining or workspace setups.",
    images: [p5, p3, p8],
    categoryId: "uuid1", // Wooden
    typeId: "uuid1", // Seating
    price: 250,
    discount: 260,
    rating: 4,
    inventory: 200,
    status: "active",
  },
  {
    id: "uuid10",
    name: "Minimalist Bookshelf",
    description:
      "Tall, open storage unit made from wood, perfect for displaying books and decor.",
    images: [p1, p7, p6],
    categoryId: "uuid1", // Wooden
    typeId: "uuid5", // Storage
    price: 350,
    discount: 50,
    rating: 4.5,
    inventory: 50,
    status: "active",
  },
  {
    id: "uuid11",
    name: "Outdoor Folding Table",
    description:
      "A versatile folding table with a durable bamboo surface, ideal for outdoor entertainment.",
    images: [p2, p4, p5],
    categoryId: "uuid2", // Bamboo
    typeId: "uuid4", // Tables
    price: 120,
    discount: 0,
    rating: 3.8,
    inventory: 150,
    status: "active",
  },
];
