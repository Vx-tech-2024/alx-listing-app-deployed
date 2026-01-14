// pages/api/properties/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  amenities: string[];
}

const mockProperties: Property[] = [
  {
    id: 1,
    title: "Beautiful Beach House",
    description: "A stunning beach house with ocean view. Perfect for family vacations with direct beach access, private pool, and fully equipped kitchen.",
    price: 200,
    location: "Malibu, California",
    image: "https://picsum.photos/600/400?random=1",
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    amenities: ["WiFi", "Pool", "Beach Access", "Kitchen", "Parking", "Air Conditioning", "TV", "Washer"]
  },
  {
    id: 2,
    title: "Modern City Apartment",
    description: "Luxury apartment in the city center with amazing skyline views. Walking distance to restaurants, shops, and public transportation.",
    price: 150,
    location: "New York, NY",
    image: "https://picsum.photos/600/400?random=2",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    amenities: ["WiFi", "Gym", "Concierge", "Kitchen", "Parking", "Air Conditioning", "TV", "Elevator"]
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property | { error: string }>
) {
  const { id } = req.query;
  
  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "Invalid property ID" });
  }

  const propertyId = parseInt(id);
  const property = mockProperties.find(p => p.id === propertyId);

  if (!property) {
    return res.status(404).json({ error: "Property not found" });
  }

  // Simulate API delay
  setTimeout(() => {
    res.status(200).json(property);
  }, 500);
}