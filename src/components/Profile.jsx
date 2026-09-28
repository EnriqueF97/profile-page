export default function Profile() {
  return (
    <section id="profile" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-semibold mb-4 lg:text-left text-center text-white">
            Profile
          </h2>
        </div>
        <div className="lg:col-span-9">
          <div className="bg-gradient-to-br from-zinc-100 via-stone-50 to-slate-50 p-4 space-y-4 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1 text-left">
            <p className="text-lg lg:text-left text-center">
              <strong>Software engineer with over 4 years of experience</strong>
              , now <strong>specialized in Artificial Intelligence</strong>{" "}
              through the Erasmus Mundus Joint Master's in AI &amp;
              Cybersecurity.
            </p>
            <p className="text-lg lg:text-left text-center">
              Focused on LLMs, NLP, and time-series forecasting, with a
              production and evaluation mindset. Also experienced in
              cloud-native systems on AWS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
