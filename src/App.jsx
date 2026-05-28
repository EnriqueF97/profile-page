import Header from './components/Header'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Education from './components/Education'

function App() {
  return (
    <div className="bg-gradient-to-l from-blue-950 md:from-40% via-zinc-900 to-stone-950 to-100% font-sans">
      <Header />
      <main className="scroll-smooth mx-auto px-4 py-12 lg:py-16 max-w-screen-xl space-y-16 text-center">
        <Contact />
        <Profile />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
      </main>
    </div>
  )
}

export default App