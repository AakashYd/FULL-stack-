import React, { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { useAuth } from '../context/AuthContext';
    import PageTransition from '../components/PageTransition';
    import { motion } from 'framer-motion';
    import { UserPlus } from 'lucide-react';

    export default function Signup() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const { signUp } = useAuth();
      const navigate = useNavigate();

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          await signUp(email, password);
          navigate('/');
        } catch (err) {
          setError('Failed to create an account');
        }
      };

      return (
        <PageTransition>
          <div className="relative min-h-screen pt-20">
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-8"
              >
                <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-600 focus:border-white focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-600 focus:border-white focus:outline-none"
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <span>Create Account</span>
                    <UserPlus className="w-4 h-4" />
                  </motion.button>
                </form>
                <p className="mt-4 text-center">
                  Already have an account?{' '}
                  <Link to="/login" className="text-white hover:underline">
                    Sign in
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </PageTransition>
      );
    }
