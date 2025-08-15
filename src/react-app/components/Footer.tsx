import { motion } from 'framer-motion';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import Projects from './Projects';

const footerLinks = {
  portfolio: [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Academic Journey', href: '#academic' },
    { name: 'Contact', href: '#contact' }
  ],
  Projects: [
    { name: 'Nexverse IITM Website', href: 'https://nexverse-iitm.com/' },
    { name: 'Student Performance Indicator', href: 'https://studentmarkspredicter.streamlit.app/' },
    { name: 'Freelancer Website', href: 'https://devs-tushar.vercel.app/' },
    { name: 'Bhveda Media Website', href: 'https://bhveda.com/' }
  ],
  connect: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tushar-sharma-6a037a281/' },
    { name: 'GitHub', href: 'https://github.com/tusharprogramer1906' },
    { name: 'Instagram', href: 'https://www.instagram.com/tushar___1906/' },
    { name: 'Email', href: 'mailto:info19tus@gmail.com' }
  ]
};

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Tushar Sharma
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming data into insights and crafting high-performance websites.
            </p>
          </motion.div>

          {/* Site Map */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4 capitalize">
                {category === 'portfolio' ? 'Navigation' : category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Back to Top Button */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronUpIcon className="w-6 h-6 group-hover:animate-bounce" />
          </motion.button>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center md:text-left mb-4 md:mb-0"
            >
              <p className="mb-1">© 2025 Tushar Sharma Portfolio. All rights reserved.</p>
              <p className="text-sm">Built with modern web technologies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center md:text-right"
            >
              <p className="text-sm">Made with ❤️</p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
