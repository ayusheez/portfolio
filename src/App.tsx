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
  <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10 shadow-md transition-all duration-300">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
      
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest text-white hover:text-gray-300 transition-all duration-300">
        AG.
      </h1>

      <div className="flex items-center space-x-4">
        
        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:inline-block px-4 py-2 text-sm rounded-full font-semibold text-white border border-white hover:bg-white hover:text-black transition-all"
        >
          Hire Me
        </a>

        {/* Hamburger Button */}
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          {isMenuOpen ? (
            <X size={26} className="text-white" />
          ) : (
            <Menu size={26} className="text-white" />
          )}
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
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center bg-black text-white px-6"
>
  <div className="z-10 text-center max-w-3xl w-full">
    {/* Profile Image */}
    <div className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-6 rounded-full border border-gray-700 shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src={ayushiImage}
        alt="Ayushi Gautam"
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* Intro Text */}
    <p className="text-sm text-gray-400 tracking-widest uppercase mb-1">
      Hi, I’m
    </p>

    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">
      Ayushi Gautam
    </h1>

    <p className="text-lg md:text-xl text-gray-300 font-medium mb-5">
      Full Stack Developer
    </p>

    {/* Short Bio */}
    <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto">
     I design digital experiences that are fast, accessible, and human-centered -: blending creativity with logic to solve real-world problems through clean code, clear thinking, and intentional impact.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <a
        href="#contact"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition"
      >
        Contact Me
      </a>

      <a
        href="#projects"
        className="px-6 py-3 border border-gray-500 hover:border-white text-gray-300 hover:text-white rounded-md text-sm font-medium transition"
      >
        View Projects
      </a>

      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm font-medium transition"
      >
        View Resume
      </a>
    </div>

    {/* Social Icons */}
    <div className="flex justify-center gap-6 text-gray-400 text-xl">
      <a
        href="https://github.com/ayusheez"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/ayushigautam91"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:gautamayushi91@gmail.com"
        className="hover:text-white transition"
      >
        <FaEnvelope />
      </a>
    </div>
  </div>
</section>













{/*aboout*/}



<section id="about" className="relative py-20 px-4 bg-black overflow-hidden">
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

      {/* Profile Image */}
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-gray-700 shadow-md hover:shadow-xl transition duration-500"
        initial={{ scale: 0.95, opacity: 0 }}
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

      {/* Text Content */}
      <motion.div
        className="max-w-xl text-center md:text-left bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I’m <span className="text-white font-semibold">Ayushi Gautam</span>, a full stack developer with a strong eye for design and love for backend logic. I create responsive, scalable web applications using React, JavaScript, Node.js, and a sprinkle of AI magic.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          From coding for college projects to building full-stack tools, I’ve worked on real-world use cases that taught me how to think like a problem solver. I enjoy learning new tech, writing clean code, and building things that actually help people.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Outside code? You’ll find me journaling, teaching, watching chill web series, or diving into AI research and creative tech.
        </p>
      </motion.div>
    </div>
  </motion.div>
</section>

















{/*Skills Section*/}

<section id="skills" className="py-20 px-6 bg-black text-white">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="flex flex-col items-center space-y-3 mb-16">
      <div className="flex items-center space-x-3">
        <Cpu className="text-blue-400" size={32} />
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">Skills</h2>
      </div>
      <p className="text-gray-400 text-center max-w-xl">
        Here are the tools and technologies I use to build reliable, scalable web applications.
      </p>
    </div>

    {/* Skills Grid */}
    <div className="grid md:grid-cols-3 gap-12">

      {/* Languages */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-800 p-4 rounded-full shadow-md">
          <span className="text-white text-2xl">💻</span>
        </div>
        <h3 className="text-2xl font-semibold mt-5 mb-4">Languages</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['HTML', 'CSS', 'Java', 'JavaScript'].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 bg-white/10 text-white rounded-full border border-gray-600 text-sm font-medium hover:bg-pink-600 hover:border-pink-600 transition duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Frameworks & Databases */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-800 p-4 rounded-full shadow-md">
          <span className="text-white text-2xl">🛠️</span>
        </div>
        <h3 className="text-2xl font-semibold mt-5 mb-4">Frameworks & Databases</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'MySQL', 'MongoDB', 'PostgreSQL'].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 bg-white/10 text-white rounded-full border border-gray-600 text-sm font-medium hover:bg-blue-600 hover:border-blue-600 transition duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-800 p-4 rounded-full shadow-md">
          <span className="text-white text-2xl">⚙️</span>
        </div>
        <h3 className="text-2xl font-semibold mt-5 mb-4">Tools</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['Git & GitHub', 'Postman', 'Render', 'Vercel'].map((tool) => (
            <span
              key={tool}
              className="px-4 py-1.5 bg-white/10 text-white rounded-full border border-gray-600 text-sm font-medium hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
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


<section id="experience" className="py-20 px-4 bg-black text-white">
  <div className="max-w-7xl mx-auto">

    {/* Section Title */}
    <div className="flex items-center space-x-2 mb-12">
      <Briefcase className="text-blue-500" size={28} />
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide">Experience</h2>
    </div>

    {/* Experience Cards */}
    <div className="space-y-8">
      {[
        {
          role: 'Java Developer Intern',
          company: 'Infosys Springboard',
          period: '2024 – Present',
          description:
            'Building a multicloud storage application with a unified interface using Java and cloud APIs.',
        },
        {
          role: 'MERN Stack Developer',
          company: 'EY GDS',
          period: '2024 – 2025',
          description:
            'Developed a full-stack project management tool using React, TypeScript, Express, and MongoDB with dashboards, task management, and analytics.',
        },
      ].map((exp) => (
        <div
          key={exp.role}
          className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-md hover:bg-white/10 transition duration-300"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">
            {exp.role}
          </h3>
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>{exp.company}</span>
            <span>{exp.period}</span>
          </div>
          <p className="text-sm text-gray-300">{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


















{/*Education*/}
<section id="education" className="py-20 px-4 bg-black text-white">
  <div className="max-w-4xl mx-auto">

    {/* Section Heading */}
    <div className="flex items-center space-x-2 mb-12">
      <GraduationCap className="text-blue-500" size={28} />
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide">Education</h2>
    </div>

    {/* Timeline */}
    <div className="relative border-l-2 border-blue-500/30 pl-6 space-y-12">
      {[
        {
          degree: 'Bachelor of Computer Engineering',
          institution: 'Trinity College of Engineering and Research',
          period: '2022 – 2026',
          score: 'CGPA: 8.71',
        },
        {
          degree: 'Higher Secondary Certificate (HSC)',
          institution: 'Trinity Junior College',
          period: '2020 – 2022',
          score: 'Percentage: 73.50%',
        },
        {
          degree: 'Secondary School Certificate (SSC)',
          institution: 'Lady Faizunissa Khan English Medium School',
          period: '2019 – 2020',
          score: 'Percentage: 81.80%',
        },
      ].map((edu) => (
        <div key={edu.degree} className="relative ml-4">

          {/* Timeline Dot */}
          <div className="absolute -left-[33px] top-1.5 w-5 h-5 bg-blue-500 border-4 border-black rounded-full shadow-md" />

          {/* Card */}
          <div className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-md hover:bg-white/10 transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">
              {edu.degree}
            </h3>
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>{edu.institution}</span>
              <span>{edu.period}</span>
            </div>
            <p className="text-sm text-gray-300">{edu.score}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
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
