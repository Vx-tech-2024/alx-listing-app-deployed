// components/property/PropertyDetail.tsx
import ReviewSection from "./ReviewSection";

interface PropertyDetailProps {
  property: {
    id: string;
    title: string;
    description: string;
    price: number;
    // ... other property fields
  };
}

const PropertyDetail = ({ property }: PropertyDetailProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Property details content */}
      
      {/* Include the ReviewSection at the bottom */}
      <ReviewSection propertyId={property.id} />
    </div>
  );
};

export default PropertyDetail;