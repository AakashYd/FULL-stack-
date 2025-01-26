import React, { useState, useRef, useEffect } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { useAuth } from '../context/AuthContext';
    import { Car, Search, User, Settings, LogOut, Menu } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';

    export default function Navbar() {
      const { user, signOut } = useAuth();
      const navigate = useNavigate();
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const menuRef = useRef<HTMLDivElement>(null);

      const handleSignOut = async () => {
        try {
          await signOut();
          navigate('/');
        } catch (error) {
          console.error('Error signing out:', error);
        }
      };

      const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };

      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMobileMenuOpen(false);
          }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

      return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-2">
                <Car className="w-8 h-8" />
                <span className="text-xl font-bold">Electric Cars</span>
              </Link>

              <div className="hidden md:flex items-center space-x-6">
                <Link to="/cars" className="hover:text-gray-300">Cars</Link>
                <Link to="/about" className="hover:text-gray-300">About</Link>
                <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                <Link to="/search" className="p-2 hover:bg-white/10 rounded-full">
                  <Search className="w-5 h-5" />
                </Link>
                
                {user ? (
                  <>
                    <Link to="/settings" className="p-2 hover:bg-white/10 rounded-full">
                      <Settings className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="p-2 hover:bg-white/10 rounded-full"
                    >
                      <LogOut className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <Link to="/login" className="p-2 hover:bg-white/10 rounded-full">
                    <User className="w-5 h-5" />
                  </Link>
                )}
              </div>

              <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="p-2 hover:bg-white/10 rounded-full">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ x: '100%', skewX: '-10deg' }}
                animate={{ x: 0, skewX: '0deg' }}
                exit={{ x: '100%', skewX: '-10deg' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-48 bg-black z-50 p-6 transform-origin-top-right"
              >
                <div className="flex flex-col space-y-4">
                  <Link to="/cars" className="hover:text-gray-300 text-xl py-2">Cars</Link>
                  <Link to="/about" className="hover:text-gray-300 text-xl py-2">About</Link>
                  <Link to="/contact" className="hover:text-gray-300 text-xl py-2">Contact</Link>
                  <Link to="/search" className="hover:text-gray-300 text-xl py-2">Search</Link>
                  {user ? (
                    <>
                      <Link to="/settings" className="hover:text-gray-300 text-xl py-2">Settings</Link>
                      <button
                        onClick={handleSignOut}
                        className="hover:text-gray-300 text-xl py-2"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <Link to="/login" className="hover:text-gray-300 text-xl py-2">Login</Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      );
    }
