export default function Profile() {
  return (
    <section id="profile" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-semibold mb-4 lg:text-left text-center text-white">Profile</h2>
        </div>
        <div className="lg:col-span-9">
          <div className="bg-gradient-to-br from-zinc-100 via-stone-50 to-slate-50 p-4 space-y-4 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1 text-left">
            <p className="text-lg"><strong>Full-Stack Developer</strong> with a strong foundation in both frontend and backend development. I enjoy building complete, scalable solutions. From designing intuitive interfaces to structuring clean, efficient APIs in the backend.</p>
            <p className="text-lg"><strong>Currently</strong>, I'm taking the Erasmus Mundus Joint Master in Artificial Intelligence, an international program where I study with extraordinary students from around the world across Spain, Italy, and the Netherlands, getting hands-on experience in advanced AI techniques and their practical applications.</p>
            <p className="text-lg italic text-gray-500">"A good execution opens the door. But the presentation seals the deal."</p>
          </div>
        </div>
      </div>
    </section>
  )
}