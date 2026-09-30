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
    <div className="relative min-h-screen font-sans">
      <div aria-hidden="true" className="mesh-bg fixed inset-0 -z-10" />
      <Header />
      <main className="scroll-smooth mx-auto px-4 py-12 lg:py-16 max-w-screen-xl space-y-16 text-center">
        <Contact />
        <Profile />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
      </main>
    </div>
  )
}

export default App