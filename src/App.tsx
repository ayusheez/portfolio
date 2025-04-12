import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Cpu, Send, FileText, GraduationCap } from 'lucide-react';



import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";




function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-black text-white">
       {isMenuOpen && (
  <div className="fixed inset-0 bg-black/60 backdrop-sm z-40" onClick={() => setIsMenuOpen(false)} />
)}
      {/* Navbar */}
      <nav className="fixed w-full bg-black/50  z-50 border-b border-white/5">
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/60 to-black/30 backdrop-blur-xl border-b border-blue-500/20 shadow-xl">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-5">
    
    {/* Logo with subtle animation */}
    
    <h1 className="text-3xl font-extrabold tracking-widest bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent hover:scale-105  transition-all duration-700">
      ayushi.</h1>
     
   

    <div className="flex items-center space-x-4">
      {/* CTA button (optional) */}
      <a
        href="#contact"
        className="hidden md:inline-block px-4 py-2 text-sm rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-pink-500 bg-blue-600 hover:bg-blue-700 shadow-md transition-all hover:scale-105"
      >
        Hire Me
      </a>

      {/* Hamburger / Close Icon */}
      <button
        ref={buttonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-3 bg-blue-500/10 hover:bg-blue-500/20 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 group shadow-inner"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={26} className="text-blue-400 group-hover:rotate-180 transition-transform duration-300" />
        ) : (
          <Menu size={26} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
        )}
      </button>
    </div>
  </div>
</nav>



        
        
        {/* Side Menu */}
       

        <div
  className={`fixed top-0 right-0 h-full w-80 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
  ref={menuRef}
>

          <div className="flex flex-col h-full p-8">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-all duration-300"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {[
                { href: '#home', label: 'Home', icon: null },
                { href: '#about', label: 'About', icon: null },
                { href: '#skills', label: 'Skills', icon: null },
                { href: '#projects', label: 'Projects', icon: null },
                { href: '#experience', label: 'Experience', icon: null },
                { href: '#contact', label: 'Contact', icon: null },
                { href: '/.pdf', label: 'View Resume', icon: <FileText size={18} className="ml-2" /> }
              ].map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg tracking-wide hover:text-blue-400 transition-colors duration-300 border-b border-white/5 pb-2 flex items-center justify-between"
                  target={href.includes('pdf') ? '_blank' : undefined}
                  rel={href.includes('pdf') ? 'noopener noreferrer' : undefined}
                >
                  {label}
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
      </nav>

      {/* Hero Section */}
      
      
<section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
  {/* Background glow animation */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-black">
    <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-700 rounded-full blur-3xl opacity-30 animate-pulse" />
    <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
  </div>

  {/* Hero Content */}
  <motion.div
    className="relative z-10 text-center px-6 py-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl max-w-3xl"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.h1
      className="text-4xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      Ayushi Gautam
    </motion.h1>

    <motion.p
      className="text-lg md:text-xl text-blue-100/90 mb-6"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.7 }}
    >
      MERN Stack Developer & Tech Explorer
    </motion.p>

    <motion.p
      className="text-sm md:text-base text-blue-200 max-w-xl mx-auto mb-8"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.7 }}
    >
      I turn ideas into responsive, interactive web experiences ✨.
      Passionate about frontend magic, backend logic, and building full-stack apps that solve real-world problems.
      Exploring Java, React, and AI to level up my craft.
    </motion.p>

    {/* Buttons */}
    <motion.div
      className="flex justify-center gap-4 flex-wrap mb-6"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <a
        href="#contact"
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm md:text-base font-semibold hover:scale-105 transition transform"
      >
        📬 Contact Me
      </a>
      <a
        href="#projects"
        className="px-6 py-3 border border-blue-400 text-blue-300 rounded-full text-sm md:text-base font-semibold hover:bg-blue-500/10 hover:scale-105 transition"
      >
        🚀 View Work
      </a>
    </motion.div>

    {/* Socials */}
    <motion.div
      className="flex justify-center gap-6 text-blue-300 text-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <a href="https://github.com/ayushigautam" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/ayushigautam" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition">
        <FaLinkedin />
      </a>
      <a href="mailto:ayushi@example.com" className="hover:text-white hover:scale-110 transition">
        <FaEnvelope />
      </a>
    </motion.div>
  </motion.div>
</section>




<section id="about" className="relative py-20 px-4 bg-black overflow-hidden">
  {/* Background glow animation */}
  <div className="absolute inset-0">
    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-700 rounded-full blur-3xl opacity-20 animate-pulse" />
    <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" />
  </div>

  <motion.div
    className="relative z-10 max-w-7xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Section Header */}
    <div className="flex items-center justify-center space-x-2 mb-12">
      <User className="text-blue-500" size={28} />
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white">About Me</h2>
    </div>

    {/* Main Content */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Image */}
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-xl"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
          alt="Ayushi Gautam"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text & Cards */}
      <motion.div
        className="max-w-xl text-center md:text-left backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
          I'm <span className="text-blue-400 font-semibold">Ayushi Gautam</span>, a passionate Full Stack Developer and UI/UX Designer.
          I specialize in creating seamless, scalable web applications with beautiful interfaces and clean architecture.
          Currently exploring Java, React, and AI to build smarter and more impactful digital products.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-900/20 rounded-xl hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-105">
            <h3 className="font-bold text-blue-400 mb-1 text-2xl">5+</h3>
            <p className="text-sm text-gray-300">Years Experience</p>
          </div>
          <div className="p-4 bg-blue-900/20 rounded-xl hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-105">
            <h3 className="font-bold text-blue-400 mb-1 text-2xl">50+</h3>
            <p className="text-sm text-gray-300">Projects Completed</p>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
</section>

{/*Skills Section*/}

<section id="skills" className="relative py-20 px-4 bg-black overflow-hidden">
  {/* Background glow animation */}
  <div className="absolute inset-0">
    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse" />
  </div>

  <motion.div
    className="relative z-10 max-w-7xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Section Header */}
    <div className="flex items-center space-x-2 mb-12">
      <Cpu className="text-blue-500" size={28} />
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white">Skills</h2>
    </div>

    {/* Skills Grid */}
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      viewport={{ once: true }}
    >
      {[
        'JavaScript', 'TypeScript', 'React', 'Node.js',
        'Python', 'AWS', 'Docker', 'GraphQL',
        'MongoDB', 'PostgreSQL', 'Redis', 'Tailwind CSS'
      ].map((skill, index) => (
        <motion.div
          key={skill}
          className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-xl shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-semibold text-center tracking-wide text-sm md:text-base text-blue-100">
            {skill}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-8 md:mb-12 animate-fade-in">
            <Code className="text-blue-500" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-slide-up">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-featured online shopping platform built with React and Node.js',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80'
              },
              {
                title: 'Task Management App',
                description: 'A collaborative task management solution with real-time updates',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
              },
              {
                title: 'Social Media Dashboard',
                description: 'Analytics and management platform for social media accounts',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
              },
              {
                title: 'AI Content Generator',
                description: 'Advanced content generation tool powered by machine learning',
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad095?auto=format&fit=crop&q=80'
              }
            ].map((project, index) => (
              <div 
                key={project.title}
                className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-xs md:text-sm text-gray-300 mb-4">{project.description}</p>
                  <a href="#" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base">
                    View Project <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative py-20 px-4 bg-black overflow-hidden">
  {/* Background Glow Animation */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-700 rounded-full blur-3xl opacity-10 animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse" />
  </div>

  <motion.div
    className="relative z-10 max-w-7xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Section Title */}
    <div className="flex items-center space-x-2 mb-12">
      <Briefcase className="text-blue-500" size={28} />
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white">Experience</h2>
    </div>

    {/* Experience Cards */}
    <motion.div
      className="space-y-6 md:space-y-8"
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      viewport={{ once: true }}
    >
      {[
        {
          role: 'Senior Full Stack Developer',
          company: 'Tech Solutions Inc.',
          period: '2021 - Present',
          description: 'Leading development of enterprise applications and mentoring junior developers.',
        },
        {
          role: 'Frontend Developer',
          company: 'Digital Innovations',
          period: '2019 - 2021',
          description: 'Developed responsive web applications using React and modern JavaScript.',
        },
        {
          role: 'Software Engineer',
          company: 'StartUp Labs',
          period: '2018 - 2019',
          description: 'Built and maintained various web applications and REST APIs.',
        },
      ].map((exp, index) => (
        <motion.div
          key={exp.role}
          className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">{exp.role}</h3>
          <div className="flex justify-between text-xs md:text-sm text-blue-200 mb-3">
            <span>{exp.company}</span>
            <span>{exp.period}</span>
          </div>
          <p className="text-sm md:text-base text-blue-100/90">{exp.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
</section>

      {/* Education Section */}
      <section id="education" className="relative py-20 px-4 bg-black overflow-hidden">
  {/* Background Glows */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-600 rounded-full blur-3xl opacity-10 animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" />
  </div>

  <motion.div
    className="relative z-10 max-w-7xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Section Heading */}
    <div className="flex items-center space-x-2 mb-12">
      <GraduationCap className="text-blue-500" size={28} />
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white">Education</h2>
    </div>

    {/* Education Cards */}
    <motion.div
      className="space-y-6 md:space-y-8"
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      viewport={{ once: true }}
    >
      {[
        {
          degree: 'Bachelor of Computer Engineering',
          institution: 'University of Technology',
          period: '2018 - 2022',
          score: 'CGPA: 8.9/10',
        },
        {
          degree: 'Higher Secondary Certificate (HSC)',
          institution: 'City College',
          period: '2016 - 2018',
          score: 'Percentage: 92%',
        },
        {
          degree: 'Secondary School Certificate (SSC)',
          institution: 'City School',
          period: '2015 - 2016',
          score: 'Percentage: 95%',
        },
      ].map((edu) => (
        <motion.div
          key={edu.degree}
          className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">{edu.degree}</h3>
          <div className="flex justify-between text-xs md:text-sm text-blue-200 mb-3">
            <span>{edu.institution}</span>
            <span>{edu.period}</span>
          </div>
          <p className="text-sm md:text-base text-blue-100/90">{edu.score}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
</section>


      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 bg-black overflow-hidden">
  {/* Background Glow Effects */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-600 rounded-full blur-3xl opacity-10 animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" />
  </div>

  <motion.div
    className="relative z-10 max-w-7xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Heading */}
    <div className="flex items-center space-x-2 mb-12">
      <Send className="text-blue-500" size={28} />
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white">Get in Touch</h2>
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Contact Info */}
      <motion.div
        className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-6 md:p-8 shadow-xl hover:bg-white/10 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        <p className="text-base md:text-lg text-gray-300 mb-8">
          I'm always open to connecting on new ideas and collaborations. Drop a message anytime!
        </p>
        <div className="space-y-4">
          <a href="mailto:gautamayushi91@gmail.com" className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors group">
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm md:text-base">gautamayushi91@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/ayushigautam" target="_blank" className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors group">
            <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm md:text-base">linkedin.com/in/ayushigautam</span>
          </a>
          <a href="https://github.com/ayushigautam" target="_blank" className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors group">
            <Github size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm md:text-base">github.com/ayushigautam</span>
          </a>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-6 md:p-8 shadow-xl hover:bg-white/10 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-blue-900/40 border border-blue-500/50 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-blue-900/40 border border-blue-500/50 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 bg-blue-900/40 border border-blue-500/50 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  </motion.div>
</section>

{/* Footer */}
<footer className="relative z-10 py-6 md:py-8 px-4 border-t border-blue-900/30 bg-black text-center">
  <div className="max-w-7xl mx-auto text-gray-400 text-sm md:text-base">
    <p>© 2025 Ayushi Gautam. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}

export default App;