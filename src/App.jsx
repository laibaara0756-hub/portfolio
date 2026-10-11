import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#121212] min-h-screen text-white">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

    </div>
  )
}

export default App