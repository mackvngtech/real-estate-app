import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from './models/Property.js';

dotenv.config();

const sampleProperties = [
  {
    title: 'Luxury 5 Bedroom Duplex',
    price: 250000000,
    location: 'Lekki Phase 1, Lagos',
    description: 'Stunning contemporary duplex with modern finishes, spacious rooms, and a beautiful garden. Located in the heart of Lekki with 24/7 security.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    bedrooms: 5,
    bathrooms: 4,
    area: 450
  },
  {
    title: 'Modern 3 Bedroom Apartment',
    price: 85000000,
    location: 'Victoria Island, Lagos',
    description: 'Beautiful apartment with stunning city views, state-of-the-art kitchen, and premium amenities including gym and pool.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    bedrooms: 3,
    bathrooms: 3,
    area: 180
  },
  {
    title: 'Executive 4 Bedroom Terrace',
    price: 120000000,
    location: 'Ikeja GRA, Lagos',
    description: 'Spacious terrace house in a serene estate with excellent facilities. Perfect for families seeking comfort and security.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
    bedrooms: 4,
    bathrooms: 3,
    area: 320
  },
  {
    title: 'Waterfront Villa',
    price: 450000000,
    location: 'Banana Island, Lagos',
    description: 'Exclusive waterfront property with breathtaking views, private jetty, infinity pool, and top-tier security.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    bedrooms: 6,
    bathrooms: 6,
    area: 650
  },
  {
    title: 'Cozy 2 Bedroom Flat',
    price: 45000000,
    location: 'Surulere, Lagos',
    description: 'Affordable and well-maintained apartment in a vibrant neighborhood with easy access to transport.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    bedrooms: 2,
    bathrooms: 2,
    area: 100
  },
  {
    title: 'Penthouse Suite',
    price: 380000000,
    location: 'Ikoyi, Lagos',
    description: 'Luxurious penthouse with panoramic views, smart home technology, and exclusive rooftop terrace.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    bedrooms: 4,
    bathrooms: 5,
    area: 500
  },
  {
    title: 'Family Home with Pool',
    price: 175000000,
    location: 'Ajah, Lagos',
    description: 'Spacious family home with swimming pool, large garden, and modern amenities. Great for entertaining.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
    bedrooms: 5,
    bathrooms: 4,
    area: 400
  },
  {
    title: 'Studio Apartment',
    price: 28000000,
    location: 'Yaba, Lagos',
    description: 'Compact and efficient studio perfect for young professionals. Located near tech hubs and universities.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    bedrooms: 1,
    bathrooms: 1,
    area: 55
  },
  {
    title: 'Detached Bungalow',
    price: 95000000,
    location: 'Magodo, Lagos',
    description: 'Well-built bungalow on spacious land with room for expansion. Quiet residential area.',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800',
    bedrooms: 3,
    bathrooms: 2,
    area: 250
  },
  {
    title: 'Semi-Detached Duplex',
    price: 135000000,
    location: 'Lekki Phase 2, Lagos',
    description: 'Contemporary duplex with open-plan living, fitted kitchen, and backup power. Estate living at its best.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
    bedrooms: 4,
    bathrooms: 4,
    area: 350
  },
  {
    title: 'Luxury Apartment',
    price: 220000000,
    location: 'Victoria Island, Lagos',
    description: 'High-end apartment with concierge service, gym, cinema room, and stunning ocean views.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    bedrooms: 4,
    bathrooms: 4,
    area: 280
  },
  {
    title: '3 Bedroom Maisonette',
    price: 78000000,
    location: 'Gbagada, Lagos',
    description: 'Charming maisonette with modern fittings, parking space, and good security.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    bedrooms: 3,
    bathrooms: 3,
    area: 165
  },
  {
    title: 'Executive Mansion',
    price: 550000000,
    location: 'Parkview Estate, Ikoyi',
    description: 'Palatial residence with cinema, gym, wine cellar, staff quarters, and manicured gardens.',
    image: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=800',
    bedrooms: 7,
    bathrooms: 8,
    area: 850
  },
  {
    title: '2 Bedroom Terrace',
    price: 62000000,
    location: 'Sangotedo, Lagos',
    description: 'Affordable terrace house in a growing area with good infrastructure and transportation links.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    bedrooms: 2,
    bathrooms: 2,
    area: 140
  },
  {
    title: 'Smart Home Duplex',
    price: 195000000,
    location: 'Lekki Phase 1, Lagos',
    description: 'Fully automated smart home with solar panels, CCTV, and energy-efficient appliances.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    bedrooms: 4,
    bathrooms: 4,
    area: 380
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/realestate');
    console.log('✅ Connected to MongoDB');
    
    // Clear existing properties
    await Property.deleteMany({});
    console.log('🗑️  Cleared existing properties');
    
    // Insert sample properties
    await Property.insertMany(sampleProperties);
    console.log('✅ Successfully seeded 15 sample properties');
    
    console.log('\n📊 Sample data statistics:');
    console.log(`   Total properties: ${sampleProperties.length}`);
    console.log(`   Price range: ₦${Math.min(...sampleProperties.map(p => p.price)).toLocaleString()} - ₦${Math.max(...sampleProperties.map(p => p.price)).toLocaleString()}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();