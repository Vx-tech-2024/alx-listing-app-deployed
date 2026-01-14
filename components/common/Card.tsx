import React from 'react';
import { CardProps } from "@/interfaces/index";
import Button from './Button';

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  price,
  rating,
  location,
  onButtonClick,
}) => {
  const handleBookNow = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Property Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback for broken images
            (e.target as HTMLImageElement).src = '/assets/placeholder.jpg';
          }}
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
          ⭐ {rating}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{title}</h3>
          <span className="text-xl font-bold text-blue-600">${price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {location}
        </div>

        <Button
          text="Book Now"
          onClick={handleBookNow}
          variant="primary"
          size="medium"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Card;