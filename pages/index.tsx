

import Head from 'next/head';
import { APP_NAME } from '@/constants';
import Card from '@/component/common/Card';

const sampleListings = [
    {
      title: 'Cozy Beach House',
      description: 'Beautiful beachfront property with stunning ocean views',
      image: '/assets/house1.jpeg',
      price: 150,
      rating: 4.8,
      location: 'Malibu, CA',
    },
    {
      title: 'Modern City Apartment',
      description: 'Stylish apartment in the heart of downtown',
      image: '/assets/house2.jpeg',
      price: 120,
      rating: 4.6,
      location: 'New York, NY',
    },
    {
      title: 'Mountain Cabin Retreat',
      description: 'Peaceful cabin surrounded by nature',
      image: '/assets/house3.jpeg',
      price: 95,
      rating: 4.9,
      location: 'Aspen, CO',
    },
  ];
export default function Home() {
  // Sample data for demonstration
  

  return (
    
      <main>
        {sampleListings.map((item)=> < Card key={item.title} title={item.title} description={item.description} image={item.image} price={item.price} rating={item.rating} location={item.location} />)}

      </main>
      // <main className="min-h-screen bg-gray-50">
      //   <div className="container mx-auto px-4 py-8">
      //     <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
      //       Find Your Perfect Stay
      //     </h1>
          
      //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      //       {sampleListings.map((listing, index) => (
      //         <Card key={index} {...listing} />
      //       ))}
      //     </div>
      //   </div>
      // </main>
    
  );
}
