import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Sparkles, Rocket } from 'lucide-react';
import ashwiniImage from '../assets/ashwini.jpg';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen bg-slate-900 py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-cyan-400/20"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={ashwiniImage}
                  alt="Ashwini Jaiswal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Hey there! I'm <span className="text-cyan-400 font-semibold">Ashwini Jaiswal</span>, a creative developer who loves turning wild ideas into elegant digital experiences. My journey in tech started with curiosity and evolved into a passion for building things that matter.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm fascinated by the intersection of <span className="text-purple-400 font-semibold">artificial intelligence</span>, <span className="text-cyan-400 font-semibold">web development</span>, and <span className="text-purple-400 font-semibold">interactive design</span>. Whether it's crafting seamless user interfaces, experimenting with AI models, or building full-stack applications, I'm always excited to learn and create something new.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or brainstorming the next big project. I believe that great software is built with empathy, creativity, and a touch of magic.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { icon: Code2, label: 'Clean Code', color: 'cyan' },
                { icon: Sparkles, label: 'Innovation', color: 'purple' },
                { icon: Rocket, label: 'Fast Delivery', color: 'cyan' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors"
                >
                  <item.icon className={`text-${item.color}-400`} size={32} />
                  <span className="text-gray-300 text-sm text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
