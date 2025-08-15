import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiTableau,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiJupyter,
  SiPandas,
  SiScikitlearn,
  SiNumpy
} from 'react-icons/si';

const techStackData = [
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: SiTableau, name: 'Tableau', color: '#E97627' },
  { icon: SiJupyter, name: 'Jupyter', color: '#F37626' },
  { icon: SiPandas, name: 'Pandas', color: '#150458' },
  { icon: SiNumpy, name: 'NumPy', color: '#013243' },
  { icon: SiScikitlearn, name: 'Scikit-learn', color: '#F7931E' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
];

export default function TechStackSection() {
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
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        bounce: 0.4,
      },
    },
  };

  return (
    <section id="techstack" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden" ref={ref}>
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
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
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
          >
            Tech <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Stack</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-center text-gray-300 mb-16 max-w-2xl mx-auto"
          >
            The powerful tools and technologies I use to transform data into insights and build amazing digital experiences.
          </motion.p>

          {/* Moving Tech Stack Banner */}
          <motion.div
            variants={itemVariants}
            className="overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl py-8"
          >
            <div className="relative">
              <motion.div
                className="flex space-x-8 whitespace-nowrap"
                animate={{
                  x: ['-50%', '0%'],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 25,
                    ease: 'linear',
                  },
                }}
              >
                {[...techStackData, ...techStackData, ...techStackData].map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={`${tech.name}-${index}`}
                      className="flex-shrink-0 bg-white/10 backdrop-blur-lg rounded-xl p-4 mx-2 hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -5 }}
                      style={{
                        boxShadow: `0 0 20px ${tech.color}40`,
                      }}
                    >
                      <Icon 
                        className="w-8 h-8 mx-auto" 
                        style={{ color: tech.color }}
                      />
                      <div className="text-white text-xs mt-2 text-center font-medium">
                        {tech.name}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
