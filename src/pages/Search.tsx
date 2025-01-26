import React, { useState } from 'react';
    import PageTransition from '../components/PageTransition';
    import { motion } from 'framer-motion';
    import { Search as SearchIcon } from 'lucide-react';

    const mockCars = [
      {
        id: 1,
        name: 'Tesla Model S',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Porsche Taycan',
        image: 'https://images.unsplash.com/photo-1571127236794-81c2bca55aea?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'BMW i4',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80'
      }
    ];

    export default function Search() {
      const [searchTerm, setSearchTerm] = useState('');
      const [results, setResults] = useState([]);

      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        
        // Filter cars based on search term
        const filtered = mockCars.filter(car => 
          car.name.toLowerCase().includes(term.toLowerCase())
        );
        setResults(filtered);
      };

      return (
        <PageTransition>
          <div className="relative min-h-screen pt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search electric cars..."
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-600 focus:border-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.map((car) => (
                    <motion.div
                      key={car.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
                    >
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold">{car.name}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </PageTransition>
      );
    }
