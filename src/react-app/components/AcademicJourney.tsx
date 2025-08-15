import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AcademicCapIcon, CalendarIcon, MapPinIcon, TrophyIcon } from '@heroicons/react/24/outline';

const academicData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Guru Gobind Singh Indraprastha University",
    location: "Delhi, India",
    duration: "2023 - 2026",
    gpa: "9.5/10",
    achievements: [
      "Academic Top Performer (Consistently above 9 GPA)",
      "Active Member & Web Development Head, Nexverse IITM (College Society)",
      "Led multiple real-world AI/ML and Web Development projects"
    ],
    description: "Specialized in Machine Learning, Statistical Analysis, and Data Visualization with a focus on real-world applications."
  },
  {
    degree: "CBSE Senior Secondary (XII)",
    institution: "Red Roses Public School",
    location: "Saket , New Delhi", 
    duration: "Completed 2022",
    gpa: "9/10",
    achievements: [
      "Excellence Award in Information Practices",
      "Participation in Tech Quiz Competitions",
      "Leadership in School Eco Club"
    ],
    description: "Focused on Computer Science, Mathematics, and Statistics."
  }
];

export default function AcademicJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section id="academic" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 10 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            Academic <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-300 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My educational foundation in data science and analytics, showcasing academic excellence and continuous learning.
          </motion.p>

          {/* Cards Grid */}
          <div className="grid gap-8">
            {academicData.map((education, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group relative"
              >
                <motion.div
                  className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-400/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-2xl" />
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    <div className="relative z-10">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Main Info */}
                      <div className="md:col-span-2">
                        <div className="flex items-start space-x-4 mb-4">
                          <motion.div
                            className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:from-blue-500 group-hover:to-purple-700 transition-all duration-300"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <AcademicCapIcon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                              {education.degree}
                            </h3>
                            <p className="text-lg text-cyan-300 font-semibold group-hover:text-purple-300 transition-colors duration-300">
                              {education.institution}
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                          {education.description}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                          <motion.div 
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full group-hover:bg-white/20 transition-all duration-300"
                          >
                            <CalendarIcon className="w-4 h-4" />
                            <span>{education.duration}</span>
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full group-hover:bg-white/20 transition-all duration-300"
                          >
                            <MapPinIcon className="w-4 h-4" />
                            <span>{education.location}</span>
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full group-hover:bg-white/20 transition-all duration-300"
                          >
                            <TrophyIcon className="w-4 h-4" />
                            <span>GPA: {education.gpa}</span>
                          </motion.div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Achievements</h4>
                        {education.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ delay: index * 0.3 + idx * 0.1 }}
                            whileHover={{ x: 5, scale: 1.02 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.7, 1, 0.7],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: idx * 0.2,
                              }}
                            />
                            <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
