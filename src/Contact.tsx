import React, { useRef, useEffect } from 'react';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init(publicKey);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formElements = form.current.elements as typeof form.current.elements & {
        name: HTMLInputElement;
        email: HTMLInputElement;
        message: HTMLTextAreaElement;
      };

      const formData = {
        from_name: formElements.name.value,
        from_email: formElements.email.value,
        message: formElements.message.value,
      };

      emailjs
        .send(serviceID, templateID, formData)
        .then(() => {
          alert("✅ Message sent successfully!");
          form.current?.reset();
        })
        .catch((error) => {
          console.error("❌ Email sending error:", error);
          alert("Something went wrong. Please try again later.");
        });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center space-x-2 mb-12">
          <Send className="text-blue-500" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white/5 p-8 rounded-xl backdrop-blur-xl border border-white/10 shadow-md">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I’m always open to collaborating on meaningful projects, freelance opportunities, or just a tech talk over coffee ☕.
            </p>

            <div className="space-y-4 text-blue-400 text-sm">
              <a href="mailto:gautamayushi91@gmail.com" className="flex items-center space-x-3 hover:text-white transition">
                <Mail size={18} />
                <span>gautamayushi91@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/ayushigautam91" target="_blank" className="flex items-center space-x-3 hover:text-white transition">
                <Linkedin size={18} />
                <span>linkedin.com/in/ayushigautam91</span>
              </a>
              <a href="https://github.com/ayusheez" target="_blank" className="flex items-center space-x-3 hover:text-white transition">
                <Github size={18} />
                <span>github.com/ayusheez</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-4 bg-white/5 p-8 rounded-xl backdrop-blur-xl border border-white/10 shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
