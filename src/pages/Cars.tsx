import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const cars = [
  {
    name: "Tesla Model S",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=80",
    description: "Luxury electric sedan with exceptional range and performance",
    price: "From $74,990"
  },
  {
    name: "Porsche Taycan",
    image: "https://images.unsplash.com/photo-1571127236794-81c2bca55aea?auto=format&fit=crop&w=1000&q=80",
    description: "High-performance electric sports car with stunning design",
    price: "From $82,700"
  },
  {
    name: "BMW i4",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80",
    description: "Electric gran coupé combining elegance with sustainability",
    price: "From $55,900"
  },
  {
    name: "Audi e-tron GT",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&w=1000&q=80",
    description: "Progressive electric luxury sedan",
    price: "From $102,400"
  },
  {
    name: "Mercedes EQS",
    image: "https://images.unsplash.com/photo-1633729371992-0f9a13cc6d3d?auto=format&fit=crop&w=1000&q=80",
    description: "Luxury electric vehicle with cutting-edge technology",
    price: "From $102,310"
  },
  {
    name: "Rivian R1T",
    image: "https://images.unsplash.com/photo-1664298928907-ac489d3ad55f?auto=format&fit=crop&w=1000&q=80",
    description: "All-electric adventure vehicle",
    price: "From $73,000"
  }
];

export default function Cars() {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <Spline scene="https://prod.spline.design/NYnTe3YctwcC8ihb/scene.splinecode" />
        </div>
        
        <div className="relative z-10 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
              Featured Electric Cars
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-lg rounded-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                    <p className="text-gray-300 mb-4">{car.description}</p>
                    <p className="text-xl font-semibold text-white">{car.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
