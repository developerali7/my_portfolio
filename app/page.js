'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

export default function Portfolio() {
  const [hovered, setHovered] = useState(null)
  const [copied, setCopied] = useState(false)
  const email = "kashif.dev26@gmail.com"

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // text resets after 2 seconds
  };

  const projects = [
    {
      id: 1,
      title: 'The Perfumi',
      image: '/projectImages/spray-bottle.png',
      description: 'E-commerce site for selling perfumes, built it using MERN stack and Tailwind CSS. It has all of neccessary features that should be in an e-commerce store like secure user authentication, user profile, shopping cart, order management system and admin dashboard',
      tags: ['React', 'Node Js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe'],
      url: 'https://perfumi.vercel.app'
    },
    {
      id: 2,
      title: 'The Fighters Hub',
      image: '/projectImages/fightersLogo.jpg',
      description: 'A Website which displays mma and boxing fighters, fetches upcoming fights and latest news through an api. It includes home page, fighters page, fighters detail page, fights page, news page. built it using Vanilla JS, HTML and CSS',
      tags: ['HTML', 'CSS', 'Vanilla JS'],
      url: 'https://fighters-hub.netlify.app/'
    },
    {
      id: 3,
      title: 'Ancient Scroll Portfolio',
      image: '/projectImages/portfolio.png',
      description: 'This is an ancient scroll–themed portfolio, built it using Next.js and Tailwind CSS, with animations via Framer Motion. Designed and implemented a snake progress bar to show page navigation as levels, plus navigation buttons (functional on PC). Deployed on Vercel',
      tags: ['Next.js', 'Tailwind CSS'],
      url: 'https://ancient-scroll-portfolio.vercel.app/'
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-2">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I'm <span className="text-cyan-400">Kashif</span>
        </motion.h1>

        <TypeAnimation
          sequence={[
            'I build full-stack apps',
            2000,
            'I design scalable systems',
            2000,
            'I create modern web experiences',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="mt-6 text-lg text-gray-400"
        />

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="mt-10 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full shadow-lg shadow-cyan-500/20 hover:bg-cyan-600"
        >
          View My Work
        </motion.a>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I build full-stack applications with modern technologies. My focus is on performance,
          clean architecture, and delivering real-world solutions. i have been building websites and web apps for 3 years and still learning.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6 bg-zinc-900/50 backdrop-blur">
        <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'Express', 'Stripe', 'Firebase'].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-black p-4 rounded-xl text-center"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id} // unique ID from data
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl overflow-hidden"
            >
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>
              
              {/* Displaying Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-4"
                >
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition"
                  >
                    View Project
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 bg-zinc-900/50 text-center">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">Let's Work Together</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Have a project in mind or want to discuss an opportunity?
          Send me a message and I'll get back to you.
        </p>

        <div className="max-w-2xl mx-auto">
          <form
            action="https://formspree.io/f/xlgvylkp"
            method="POST"
            className="space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 bg-black/40 border border-zinc-700 rounded-xl focus:outline-none focus:border-cyan-400 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 bg-black/40 border border-zinc-700 rounded-xl focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-5 py-4 bg-black/40 border border-zinc-700 rounded-xl focus:outline-none focus:border-cyan-400 transition"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              required
              className="w-full px-5 py-4 bg-black/40 border border-zinc-700 rounded-xl focus:outline-none focus:border-cyan-400 transition resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-4 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-600 transition"
            >
              Send Message
            </motion.button>
          </form>

          <div className="grid md:grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto">
            <div className="bg-white/5 p-5 rounded-xl border border-white/10 text-center">
              <h3 className="text-cyan-400 font-semibold">Email</h3>

              <div className="flex items-center justify-center gap-2">
                <p className="text-sm text-gray-400">
                  {email}
                </p>

                <button
                  onClick={handleCopy}
                  className="text-xs px-2 py-1 rounded-md border border-zinc-700 hover:border-cyan-400 hover:text-cyan-400 transition cursor-pointer"
                >
                  {copied ? '✓' : '📋'}
                </button>
              </div>
              
            </div>

            <div className="bg-white/5 p-5 rounded-xl border border-white/10 text-center">
              <h3 className="text-cyan-400 font-semibold">Location</h3>
              <p className="text-sm text-gray-400">
                Pakistan
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border border-white/10 text-center">
              <h3 className="text-cyan-400 font-semibold">Availability</h3>
              <p className="text-sm text-gray-400">
                Open to opportunities
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Kashif. All rights reserved.
      </footer>
    </main>
  )
}
