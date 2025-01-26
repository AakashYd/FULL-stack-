import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import { AnimatePresence } from 'framer-motion';
    import Navbar from './components/Navbar';
    import Home from './pages/Home';
    import About from './pages/About';
    import Contact from './pages/Contact';
    import Login from './pages/Login';
    import Signup from './pages/Signup';
    import Settings from './pages/Settings';
    import Search from './pages/Search';
    import Cars from './pages/Cars';
    import { AuthProvider } from './context/AuthContext';

    function App() {
      return (
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-black text-white">
              <Navbar />
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/cars" element={<Cars />} />
                </Routes>
              </AnimatePresence>
            </div>
          </Router>
        </AuthProvider>
      );
    }

    export default App;
