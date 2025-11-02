// components/common/Card.tsx

import React from 'react';
import Image from 'next/image';
import { CardProps } from '@/interfaces';
import Button from './Button';

const Card = ({
  title,
  description,
  image,
  price,
  rating,
  location,
} :CardProps ) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          {rating && (
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-sm text-gray-600">{rating}</span>
            </div>
          )}
        </div>
        
        {location && (
          <p className="text-sm text-gray-500 mb-2">{location}</p>
        )}
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          {price && (
            <p className="text-lg font-bold text-gray-900">
              ${price}
              <span className="text-sm font-normal text-gray-500"> / night</span>
            </p>
          )}
          
          <Button
            label="View Details"
            variant="primary"
            size="small"
            onClick={() => console.log(`Viewing details for ${title}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
