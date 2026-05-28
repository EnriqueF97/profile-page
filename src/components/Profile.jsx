export default function Profile() {
  return (
    <section id="profile" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-semibold mb-4 lg:text-left text-center text-white">Profile</h2>
        </div>
        <div className="lg:col-span-9">
          <div className="bg-gradient-to-br from-zinc-100 via-stone-50 to-slate-50 p-4 space-y-4 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1 text-left">
            <p className="text-lg">
              AI/ML Engineer with a software engineering background and specialization in Artificial Intelligence and Cybersecurity through the Erasmus Mundus Joint Master's programme.
            </p>
            <p className="text-lg">
              Experienced in NLP, time-series forecasting, computer vision, cloud-native systems, and applied machine learning research.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}