import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ThoughtJoke } from './components/ThoughtJoke';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ThoughtJoke />
      <Contact />
    </div>
  );
}

export default App;
