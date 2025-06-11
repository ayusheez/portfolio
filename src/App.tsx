import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Cpu, Send, FileText, GraduationCap } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import ayushiImage from './images/ayy.png';
import Multicloud from './images/Multicloud.jpeg';
import coming_soon from './images/coming_soon.jpeg';
import fake_invoice from './images/fake_invoice.jpeg';
import song from './images/song2.jpeg';
import food from './images/fem.png';

import resume from './images/ayushi-resume.pdf';
import certificate1 from './images/infosys.pdf';
import certificate2 from './images/google.pdf';
import certificate3 from './images/coursera.pdf';
import certificate4 from './images/ey.pdf';
import Contact from './Contact'; // NEW import

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
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Navbar */}
<nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-md transition-all duration-300">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
    {/* Logo */}
    <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-700">
      AG.
    </h1>

    <div className="flex items-center space-x-4">
      {/* Hire Me Button */}
      <a href="#contact" className="hidden md:inline-block px-4 py-2 text-sm rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-pink-500 hover:scale-105 transition-all">
        Hire Me
      </a>

      {/* Hamburger Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-3 bg-blue-500/10 hover:bg-blue-500/20 rounded-full transition-all duration-300"
      >
        {isMenuOpen ? <X size={26} className="text-blue-400" /> : <Menu size={26} className="text-blue-400" />}
      </button>
    </div>
  </div>
</nav>

{/* Side Menu */}
<div className={`fixed top-0 right-0 h-full w-80 bg-black z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} ref={menuRef}>
  <div className="flex flex-col h-full p-8">
    <div className="flex justify-end mb-8">
      <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-white/5 rounded-full">
        <X size={24} />
      </button>
    </div>
    <div className="flex flex-col space-y-6">
      {[
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
        { href: '#home', label: 'Download Resume' }
      ].map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={() => setIsMenuOpen(false)}
          className="text-lg tracking-wide hover:text-blue-400 transition-colors duration-300 border-b border-white/5 pb-2"
          target={href.includes('.pdf') ? '_blank' : undefined}
          rel={href.includes('.pdf') ? 'noopener noreferrer' : undefined}
        >
          {label}
        </a>
      ))}
    </div>
  </div>
</div>

{/* Main Sections */}
<main className="pt-12 md:pt-14">
  {/* Hero Section */}
  <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
    {/* Background glow animation */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-black">
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-700 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
    </div>

    {/* Hero Content */}
    <div className="relative z-10 text-center px-4 py-6 md:py-10 max-w-3xl">
      
      {/* Profile Image */}
      <div className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-6 rounded-full border-4 border-blue shadow-[0_0_20px_4px_rgba(255,255,255,0.6)] hover:shadow-[0_0_25px_8px_rgba(255,255,255,0.9)] transition-shadow duration-500 ease-in-out hover:scale-105 overflow-hidden">
        <img
          src={ayushiImage}
          className="w-full h-full object-cover object-top"
          alt="Ayushi Gautam"
        />
      </div>

      <h1 className="font-poppins text-blue-300 text-sm mb-2 tracking-wider uppercase">Hello I'm</h1>

      <h1 className="text-4xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Ayushi Gautam
      </h1>

      <p className="text-lg md:text-xl text-blue-100/90 mb-6">
        Software Developer
      </p>

      <p className="text-sm md:text-base text-blue-200 max-w-xl mx-auto mb-8">
        I turn ideas into responsive, interactive web experiences ✨.
        Passionate about frontend magic, backend logic, and building full-stack apps that solve real-world problems.
        Exploring Java, React, and AI to level up my craft.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
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

        <a
          href={resume}
          download
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm md:text-base font-semibold hover:scale-105 transition transform"
        >
          📄 Download Resume
        </a>
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-6 text-blue-300 text-xl mt-6">
        <a href="https://github.com/ayusheez" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/ayushigautam91" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition">
          <FaLinkedin />
        </a>
        <a href="mailto:gautamayushi91@gmail.com" className="hover:text-white hover:scale-110 transition">
          <FaEnvelope />
        </a>
      </div>
    </div>
  </section>












{/*aboout*/}



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
  className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_20px_4px_rgba(59,130,246,0.6)] hover:shadow-[0_0_25px_8px_rgba(59,130,246,0.8)] transition-shadow duration-500 ease-in-out hover:scale-105"
  initial={{ scale: 0.9, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  viewport={{ once: true }}
>
  <img
    src={ayushiImage}
    className="w-full h-full object-cover object-top"
    alt="Ayushi Gautam"
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
  Hey, I'm <span className="text-blue-400 font-semibold">Ayushi Gautam</span> — a Full Stack Developer and AI Enthusiast with a love for crafting powerful, user-friendly web applications that actually make a difference. Whether it’s frontend finesse or backend logic, I thrive on turning complex ideas into clean, functional digital solutions.
</p>

<p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
  My tech journey began with a simple curiosity about how things work — now, it’s evolved into a full-blown obsession with building, learning, and experimenting. I’m especially passionate about artificial intelligence, React, and anything that challenges me to think differently. Let’s just say: I never stop leveling up.
</p>

        
      </motion.div>
    </div>
  </motion.div>
</section>

















{/*Skills Section*/}

<section id="skills" className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
  {/* Background glow animation */}
  <div className="absolute inset-0">
    <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-pink-500 rounded-full blur-[150px] opacity-20 animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 animate-pulse" />
  </div>

  <motion.div
    className="relative z-10 max-w-7xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    {/* Section Header */}
    <div className="flex flex-col items-center space-y-3 mb-16">
      <div className="flex items-center space-x-3">
        <Cpu className="text-blue-400" size={32} />
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white">Skills</h2>
      </div>
      <p className="text-gray-400 text-center max-w-xl">
        Here are the technologies and tools I've mastered to build modern web experiences.
      </p>
    </div>

    {/* Skills Categories */}
    <div className="grid md:grid-cols-3 gap-16">
      {/* Languages */}
      <div className="flex flex-col items-center transform hover:scale-110 transition-all duration-500">
        <div className="bg-gradient-to-tr from-pink-500 to-purple-500 p-4 rounded-full shadow-xl transform hover:rotate-6 transition-all duration-500">
          <span className="text-white text-2xl">💻</span>
        </div>
        <h3 className="text-2xl font-semibold text-white mt-6 mb-4">Languages</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['HTML', 'CSS', 'Java', 'JavaScript'].map((skill) => (
            <div
              key={skill}
              className="px-5 py-2 bg-white/10 text-white rounded-full border border-white/20 text-sm font-semibold hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300 backdrop-blur-md shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks, Libraries & Databases */}
      <div className="flex flex-col items-center transform hover:scale-110 transition-all duration-500">
        <div className="bg-gradient-to-tr from-blue-500 to-teal-400 p-4 rounded-full shadow-xl transform hover:rotate-6 transition-all duration-500">
          <span className="text-white text-2xl">🛠️</span>
        </div>
        <h3 className="text-2xl font-semibold text-white mt-6 mb-4 text-center">Frameworks & Databases</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'MySQL', 'MongoDB', 'PostgreSQL'].map((skill) => (
            <div
              key={skill}
              className="px-5 py-2 bg-white/10 text-white rounded-full border border-white/20 text-sm font-semibold hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 backdrop-blur-md shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="flex flex-col items-center transform hover:scale-110 transition-all duration-500">
        <div className="bg-gradient-to-tr from-yellow-400 to-pink-400 p-4 rounded-full shadow-xl transform hover:rotate-6 transition-all duration-500">
          <span className="text-white text-2xl">⚙️</span>
        </div>
        <h3 className="text-2xl font-semibold text-white mt-6 mb-4">Tools</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['Git & GitHub', 'Postman', 'Render', 'Vercel'].map((skill) => (
            <div
              key={skill}
              className="px-5 py-2 bg-white/10 text-white rounded-full border border-white/20 text-sm font-semibold hover:bg-yellow-400 hover:text-white hover:border-yellow-400 transition-all duration-300 backdrop-blur-md shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
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
    title: 'CloudSync',
    description: 'An unified Multicloud storage application for Google Drive and one drive.',
    image: Multicloud,
    link: 'http://multicloud-woad.vercel.app',
  },
  {
    title: 'FemCare',
    description: 'AI Based Health Recommendation (GMM) .',
    image: food,
    link: 'https://fem-care-five.vercel.app/',
  },
  {
    title: 'MoodMate',
    description: 'AI based song recommendar according to your Images and voice record.Still in progress',
    image: song,
    link: 'http://moodmate-beta.vercel.app',
  },
  {
    title: 'BlackTrace',
    description: ' Fraud Invoice Detection - A tool to detect fraud invoices.',
    image: fake_invoice,
    link: 'https://invoice-detectt.netlify.app/',
  },
  {
    title: 'New Project coming soon',
    description: 'Exciting project which is AI based coming soon',
    image: coming_soon,
    
  }
]
.map((project, index) => (
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
                  <a 
  href={project.link} 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base"
>
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
          role: 'Java Developer Intern',
          company: 'Infosys Springboard',
          period: '2024 - Present',
          description: 'Building a Multicloud storage application with unified Interface .',
        },
        {
          role: 'MERN Stack Developer',
          company: 'EYGDS',
          period: '2024 - 2025',
          description: 'Developed responsive web applications using React and modern typescript.',
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










{/*certificate section*/}

<section id="certifications" className="py-20 px-4 bg-gradient-to-b from-[#0f0f0f] to-black">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="flex items-center space-x-2 mb-12">
      <span className="text-pink-500 text-2xl">📜</span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white">Certifications</h2>
    </div>

    {/* Certificates Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
  {
    title: 'Java Programming',
    provider: 'Infosys Springboard',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    gradient: 'from-orange-500 to-red-500',
    link: certificate1,
  },
  {
    title: 'Gen AI Study Jam',
    provider: 'Google Developer Group',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    gradient: 'from-blue-400 to-cyan-500',
    link: certificate2,
  },
  {
    title: 'Building Website with WordPress',
    provider: 'Coursera',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    gradient: 'from-blue-600 to-indigo-500',
    link: certificate3,
  },
  {
    title: 'MERN Development',
    provider: 'EYDGS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    gradient: 'from-green-400 to-blue-500',
    link: certificate4,
  },
]
.map((cert, index) => (
        <div
          key={index}
          className="rounded-2xl shadow-md overflow-hidden bg-[#111111] border border-white/10 backdrop-blur-md"
        >
          {/* Gradient Header */}
          <div className={`p-6 bg-gradient-to-r ${cert.gradient} flex items-center`}>
            <img src={cert.icon} alt="icon" className="w-10 h-10" />
          </div>

          {/* Certificate Details */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
            <p className="text-sm text-gray-400">{cert.provider}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-purple-400 font-medium text-sm hover:underline"
            >
              View Certificate <span className="inline-block ml-1">↗</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>








    {/* Soft Skills Heading */}
    <div className="flex items-center space-x-2 mb-8">
      <span className="text-green-400 text-2xl">🧠</span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white">Soft Skills</h2>
    </div>

    {/* Soft Skills Grid */}
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {[
        'Communication',
        'Team Collaboration',
        'Problem Solving',
        'Time Management',
        'Adaptability',
        'Critical Thinking',
        'Creativity',
        'Leadership',
      ].map((skill) => (
        <div
          key={skill}
          className="text-center px-4 py-3 text-sm font-medium text-blue-100 border border-white/10 bg-white/5 rounded-lg backdrop-blur-md hover:bg-white/10 transition"
        >
          {skill}
        </div>
      ))}
    </motion.div>
 










{/*Education*/}
<section id="education" className="relative py-20 px-4 bg-black overflow-hidden">
  {/* Background Glows */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-600 rounded-full blur-3xl opacity-10 animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" />
  </div>

  <motion.div
    className="relative z-10 max-w-4xl mx-auto"
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

    {/* Vertical Timeline Line */}
    <div className="relative border-l-2 border-blue-500/30 pl-6 space-y-12">
      {[
        {
          degree: 'Bachelor of Computer Engineering',
          institution: 'Trinity College of Engineering and Research',
          period: '2022 - 2026',
          score: 'CGPA: 8.71',
        },
        {
          degree: 'Higher Secondary Certificate (HSC)',
          institution: 'Trinity Junior College',
          period: '2020 - 2022',
          score: 'Percentage: 73.50%',
        },
        {
          degree: 'Secondary School Certificate (SSC)',
          institution: 'Lady Faizunissa Khan English Medium School',
          period: '2019 - 2020',
          score: 'Percentage: 81.80%',
        },
      ].map((edu, index) => (
        <motion.div
          key={edu.degree}
          className="relative ml-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[33px] top-1.5 w-5 h-5 bg-blue-500 border-4 border-black rounded-full shadow-lg" />

          {/* Card Content */}
          <div className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">{edu.degree}</h3>
            <div className="flex justify-between text-xs md:text-sm text-blue-200 mb-3">
              <span>{edu.institution}</span>
              <span>{edu.period}</span>
            </div>
            <p className="text-sm md:text-base text-blue-100/90">{edu.score}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>







        {/* Contact Section */}
        <Contact />

      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-blue-900/30 bg-black text-center">
        <p className="text-gray-400 text-sm">© 2025 Ayushi Gautam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
