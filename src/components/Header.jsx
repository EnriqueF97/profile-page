export default function Header() {
  return (
    <header className="bg-zinc-950 text-white shadow-xl p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-end items-center">
        <nav className="space-x-4 justify-end sm:justify-start overflow-x-auto whitespace-nowrap hide-scrollbar text-zinc-300">
          <a href="#contact" className="hover:text-zinc-50">Contact</a>
          <a href="#profile" className="hover:text-zinc-50">Profile</a>
          <a href="#skills" className="hover:text-zinc-50">Skills</a>
          <a href="#projects" className="hover:text-zinc-50">Projects</a>
          <a href="#experience" className="hover:text-zinc-50">Experience</a>
          <a href="#certifications" className="hover:text-zinc-50">Certifications</a>
        </nav>
      </div>
    </header>
  )
}