import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import type { Project } from '@/shared/types';

const projectsData: Project[] = [
  {
    id: 1,
    title: "Student Marks Predictor",
    description: "End-to-end ML web app predicting student exam scores based on study hours. Built using Python, Scikit-learn, and Streamlit with a clean, interactive UI for real-time predictions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "ML", "Streamlit", "Power BI"],
    featured: true,
    link: "https://studentmarkspredicter.streamlit.app/"
  },
  {
    id: 2,
    title: "Nexverse IITM Website",
    description: "Responsive website for Nexverse IITM’s hackathon, featuring event schedules, details, and registration flow with a mobile-first, engaging UI.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Next.js","Talwind CSS","Javacript","Aceternity UI"],
    featured: true,
    link: "https://nexverse-iitm.com/"
  },
  {
    id: 3,
    title: "Freelance Web Development Portfolio",
    description: "Modern, conversion-focused portfolio website designed for lead generation with fast load times, SEO best practices, and a clear call-to-action design.",
    image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Next.js","Talwind CSS","Javacript","SEO"],
    featured: false
  },
  {
    id: 4,
    title: "Bhveda Media Agency Site",
    description: "Full-service website for an advertising and digital marketing agency, integrating media buying, content creation, and printing solutions.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Worpress","Figma"],
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects, skills, and contact interface with a modern, user-friendly design.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML","CSS","Javascript","Netlify"],
    featured: false
  },
  {
    id: 6,
    title: "Responsive School Website",
    description: "Interactive site for Santosh Public School, featuring virtual campus tours, dynamic admissions details, and testimonial sections to improve engagement.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML","CSS","Javascript"],
    featured: false
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

  const featuredProjects = projectsData.filter(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
          >
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-centre"
          >
         A selection of my key projects showcasing expertise in machine learning,data analysis, and web development—delivering practical,user-focused solutions through innovative design and technology.
          </motion.p>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg overflow-hidden hover:shadow-2xl hover:border-white/40 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.link && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors cursor-pointer"
                        >
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 text-sm rounded-full font-medium border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

      

                
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-8 text-white"
          >
            Other Projects
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-md overflow-hidden hover:shadow-lg hover:border-white/40 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-white mb-2 text-sm group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-md border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-md border border-blue-500/20">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
