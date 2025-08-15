import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const menuItems = ['About', 'Skills', 'Projects', 'Tech Stack', 'Academic', 'Contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl' 
          : 'bg-white/5 backdrop-blur-sm border border-white/10'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Tushar Sharma
          </motion.div>
          
          {/* Centered Menu - Desktop */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </motion.button>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            {[
              { icon: FaLinkedin, color: 'hover:text-blue-400', href: 'https://www.linkedin.com/in/tushar-sharma-6a037a281/' },
              { icon: FaInstagram, color: 'hover:text-pink-400', href: 'https://www.instagram.com/tushar___1906/' },
              { icon: FaGithub, color: 'hover:text-gray-300', href: 'https://github.com/tusharprogramer1906' }
            ].map(({ icon: Icon, color, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-300 ${color} transition-all duration-300 text-xl`}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
          >
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-left py-2 px-3 rounded-lg hover:bg-white/10"
                >
                  {item}
                </motion.button>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex space-x-4 pt-3 border-t border-white/20">
                {[
                  { icon: FaLinkedin, color: 'hover:text-blue-400', href: 'https://www.linkedin.com/in/tushar-sharma-6a037a281/' },
                  { icon: FaInstagram, color: 'hover:text-pink-400', href: 'https://www.instagram.com/tushar___1906/' },
                  { icon: FaGithub, color: 'hover:text-gray-300', href: 'https://github.com/tusharprogramer1906' }
                ].map(({ icon: Icon, color, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-300 ${color} transition-all duration-300 text-xl`}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
