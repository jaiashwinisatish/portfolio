import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Lightbulb, Laugh, RefreshCw } from 'lucide-react';
import { thoughts, jokes } from '../data/thoughtsAndJokes';

const getRandomItem = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const ThoughtJoke = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentThought, setCurrentThought] = useState('');
  const [currentJoke, setCurrentJoke] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshContent = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentThought(getRandomItem(thoughts));
      setCurrentJoke(getRandomItem(jokes));
      setIsRefreshing(false);
    }, 300);
  };

  useEffect(() => {
    setCurrentThought(getRandomItem(thoughts));
    setCurrentJoke(getRandomItem(jokes));
  }, []);

  return (
    <section id="thought-joke" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            💬 Thought of the Moment & A Little Fun
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Because a little inspiration and laughter makes coding better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all shadow-lg hover:shadow-purple-500/20 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Lightbulb className="text-purple-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Inspiring Thought</h3>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentThought}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-[120px] flex items-center"
                >
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">
                    "{currentThought}"
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500/60 transition-all shadow-lg hover:shadow-cyan-500/20 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-full">
                  <Laugh className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Tech Humor</h3>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentJoke}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-[120px] flex items-center"
                >
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    {currentJoke}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={refreshContent}
            disabled={isRefreshing}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 group"
            whileHover={{ scale: isRefreshing ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isRefreshing ? { rotate: 360 } : {}}
              transition={{ duration: 0.6, ease: "linear" }}
            >
              <RefreshCw size={20} className={isRefreshing ? 'animate-spin' : ''} />
            </motion.div>
            {isRefreshing ? 'Refreshing...' : '🔄 Get New Thought & Joke'}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Fresh content on every refresh • {thoughts.length} thoughts • {jokes.length} jokes
          </p>
        </motion.div>
      </div>
    </section>
  );
};
