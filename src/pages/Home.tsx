import React from 'react';
import Spline from '@splinetool/react-spline';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <Spline scene="https://prod.spline.design/NYnTe3YctwcC8ihb/scene.splinecode" />
        </div>
        
        <div className="relative z-10 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-40"
            >
              <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                The Future of Driving
              </h1>
              <p className="text-2xl text-gray-300 mb-12">
                Discover the most innovative electric vehicles
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
