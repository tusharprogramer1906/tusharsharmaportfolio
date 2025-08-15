import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import type { Skill } from '@/shared/types';

const skillsData: Skill[] = [
  { name: 'Python', level: 80, category: 'Programming' },
  { name: 'C++', level: 70, category: 'Programming' },
  { name: 'SQL', level: 80, category: 'Database' },
  { name: 'Java', level: 75, category: 'Programming' },
  { name: 'Power BI', level: 78, category: 'Visualization' },
  { name: 'Seaborn', level: 78, category: 'Libraries' },
  { name: 'Pandas', level: 87, category: 'Libraries' },
  { name: 'Matplotlib', level: 83, category: 'Libraries' },
];

const categoryData = [
  { name: 'Programming', value: 35, color: '#3B82F6' },
  { name: 'Visualization', value: 25, color: '#8B5CF6' },
  { name: 'Database', value: 20, color: '#06B6D4' },
  { name: 'Tools & Libraries', value: 20, color: '#EC4899' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden" ref={ref}>
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-32 h-32 rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#3B82F6' : '#8B5CF6'} 0%, transparent 70%)`,
              left: `${20 + i * 20}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
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
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Bar Chart */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 group hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-blue-400/50 relative overflow-hidden"
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-400/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 rounded-2xl transition-all duration-500 blur-sm opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-blue-300 transition-colors duration-300">Proficiency Levels</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <XAxis 
                        dataKey="name" 
                        tick={{ fill: '#ffffff', fontSize: 12 }}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis tick={{ fill: '#ffffff' }} />
                      <Bar dataKey="level" radius={[4, 4, 0, 0]}>
                        {skillsData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
                        ))}
                      </Bar>
                      <defs>
                        {skillsData.map((_, index) => (
                          <linearGradient key={index} id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        ))}
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>

            {/* Skills Distribution Pie Chart */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 group hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-purple-400/50 relative overflow-hidden"
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-400/20 group-hover:via-pink-500/20 group-hover:to-blue-500/20 rounded-2xl transition-all duration-500 blur-sm opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-purple-300 transition-colors duration-300">Skill Categories</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Legend */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {categoryData.map((item) => (
                    <motion.div 
                      key={item.name} 
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}40` }}
                      />
                      <span className="text-white text-sm">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-white/10 backdrop-blur-lg rounded-xl text-center group hover:bg-white/20 transition-all duration-300 overflow-hidden"
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  <div className="relative p-6">
                    <h4 className="text-white font-semibold text-lg mb-2">{skill.name}</h4>
                    <div className="text-sm text-gray-300 mb-3">{skill.category}</div>
                    <div className="relative w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        style={{
                          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                        }}
                      />
                    </div>
                    <div className="text-white text-sm mt-2 font-medium">{skill.level}%</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
