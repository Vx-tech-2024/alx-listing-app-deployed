// pages/api/properties.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
}

const mockProperties: Property[] = [
  {
    id: 1,
    title: "Beautiful Beach House",
    description: "A stunning beach house with ocean view. Perfect for family vacations.",
    price: 200,
    location: "Malibu, California",
    image: "https://picsum.photos/300/200?random=1"
  },
  {
    id: 2,
    title: "Modern City Apartment",
    description: "Luxury apartment in the city center with amazing skyline views.",
    price: 150,
    location: "New York, NY",
    image: "https://picsum.photos/300/200?random=2"
  },
  {
    id: 3,
    title: "Mountain Cabin",
    description: "Cozy cabin in the mountains with fireplace and hot tub.",
    price: 120,
    location: "Aspen, Colorado",
    image: "https://picsum.photos/300/200?random=3"
  },
  {
    id: 4,
    title: "Lakeside Villa",
    description: "Beautiful villa by the lake with private dock and boat.",
    price: 250,
    location: "Lake Tahoe, Nevada",
    image: "https://picsum.photos/300/200?random=4"
  },
  {
    id: 5,
    title: "Urban Loft",
    description: "Spacious loft with modern amenities and industrial design.",
    price: 180,
    location: "Chicago, Illinois",
    image: "https://picsum.photos/300/200?random=5"
  },
  {
    id: 6,
    title: "Countryside Cottage",
    description: "Charming cottage in the countryside with garden and fireplace.",
    price: 100,
    location: "Vermont",
    image: "https://picsum.photos/300/200?random=6"
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property[]>
) {
  // Simulate API delay
  setTimeout(() => {
    res.status(200).json(mockProperties);
  }, 500);
}