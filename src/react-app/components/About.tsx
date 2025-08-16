import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserIcon, BriefcaseIcon, TrophyIcon, StarIcon } from '@heroicons/react/24/outline';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const stats = [
    { icon: BriefcaseIcon, number: '10+', label: 'Projects Completed', color: 'from-blue-400 to-cyan-400' },
    { icon: TrophyIcon, number: '500+', label: 'Hours', color: 'from-purple-400 to-pink-400' },
    { icon: StarIcon, number: '12+', label: 'Technologies Mastered', color: 'from-green-400 to-blue-400' },
    { icon: UserIcon, number: '5+', label: 'Happy Clients', color: 'from-orange-400 to-red-400' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" ref={ref}>
      {/* Advanced background effects */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: 100 + Math.random() * 200,
              height: 100 + Math.random() * 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#8B5CF6' : '#EC4899'} 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Animated lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"
            style={{
              width: '100%',
              top: `${20 + i * 20}%`,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.4, 0],
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
            className="text-4xl md:text-6xl font-bold text-center mb-6 text-white"
          >
            About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate data scientist transforming complex datasets into actionable business insights
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Image Section */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group">
                {/* Multiple layered backgrounds for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl transform -rotate-6 group-hover:-rotate-3 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>

                {/* Main image container */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-2 group-hover:bg-white/20 transition-all duration-500">
                  <img
                    src="/profile.jpeg"
                    alt="Professional headshot"
                    className="relative w-full h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-2 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  📊
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  💡
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Passionate About{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Data-Driven Solutions
                  </span>
                </h3>

                <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                  <p>
                    I’m an aspiring data analyst skilled in Python, C/C++, JavaScript, SQL, and data science
                    tools like Pandas, NumPy, Matplotlib, Seaborn, and Scikit-Learn. I specialize in transforming
                    complex datasets into clear, actionable insights through machine learning models, data
                    visualization, and responsive web solutions
                  </p>

                  <p>
                    From predicting student marks to building dynamic websites for events, agencies, and schools,
                    I bridge the gap between technical expertise and real-world business needs. My goal is to
                    uncover the stories hidden in data and present them in ways that inspire smart decision-making.
                  </p>
                </div>

                {/* Skills highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { skill: 'Data Visualization', level: 95 },
                    { skill: 'Statistical Analysis', level: 70 },
                    { skill: 'Machine Learning', level: 79 },
                    { skill: 'Business Intelligence', level: 85 },
                  ].map((item, index) => (
                    <motion.div
                      key={item.skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300"
                    >
                      <div className="text-white font-semibold text-sm mb-2">{item.skill}</div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                          transition={{ duration: 2, delay: index * 0.2 }}
                        />
                      </div>
                      <div className="text-gray-400 text-xs mt-1">{item.level}%</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Background gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                    <div className="relative z-10">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <motion.div
                        className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      >
                        {stat.number}
                      </motion.div>

                      <div className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
