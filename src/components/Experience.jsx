export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-semibold mb-4 lg:text-left text-center text-white">Experience</h2>
        </div>
        <div className="lg:col-span-9">
          <div className="space-y-4 text-left">
            <div className="bg-gradient-to-b from-white to-red-100 p-4 rounded-2xl shadow-md text-center md:text-left transition-transform transform hover:-translate-y-1">
              <div className="flex md:flex-row flex-col-reverse justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Master specialization in AI and Cybersecurity</h3>
                  <span className="text-sm text-red-600 font-bold">
                    <a href="https://www.upf.edu/web/emai/academic-information" target="_blank" rel="noopener noreferrer">EMAI</a>
                  </span>
                  <span className="text-sm pl-1 text-gray-700">September 2024 - March 2026</span>
                  <ul className="text-md space-y-0 list-disc pl-5 mt-4 text-left">
                    <li>2-year international program across EU universities</li>
                    <li>Focus on Machine Learning and Generative AI (Year 1)</li>
                    <li>Specialization: <span className="font-semibold text-blue-700">Cybersecurity</span> in the Netherlands</li>
                    <li>Thesis project with a research group & real-world application</li>
                  </ul>
                </div>
                <img src="/images/logo_emai.png" alt="EMAI logo" className="w-48 h-auto my-4 mx-auto md:my-auto md:ml-auto md:mr-0 flex-shrink-0 rounded" />
              </div>
            </div>
            <div className="bg-gradient-to-b from-white to-orange-50 p-4 rounded-2xl shadow-md text-center md:text-left transition-transform transform hover:-translate-y-1">
              <div className="flex flex-col-reverse md:flex-row justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Full-Stack Developer</h3>
                  <span className="text-sm text-blue-600 font-bold">Kodevox</span>
                  <span className="text-sm pl-1 text-gray-700">March, 2024 - November, 2024</span>
                  <ul className="text-md space-y-0 list-disc pl-5 mt-4 text-left">
                    <li>Led a small dev team, planned sprints, and ran retrospectives</li>
                    <li>Built the sales domain service using Python and FastAPI</li>
                    <li>Applied Hexagonal Architecture & Domain-Driven Design for scalability</li>
                    <li>Worked extensively with AWS for versioning and cloud deployments</li>
                    <li>Implemented modern micro frontends using React functional component and MUI library</li>
                    <li>Modeled and structured SQL database schemas for real-world logic</li>
                  </ul>
                </div>
                <img src="/images/logo_kodevox.png" alt="Kodevox logo" className="w-48 h-auto my-4 mx-auto md:my-auto md:ml-auto md:mr-0 flex-shrink-0 rounded" />
              </div>
            </div>
            <div className="bg-gradient-to-b from-white to-indigo-50 p-4 rounded-2xl shadow-md text-center md:text-left transition-transform transform hover:-translate-y-1">
              <div className="flex md:flex-row flex-col-reverse justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Front-End Developer</h3>
                  <span className="text-sm text-blue-500 font-bold">Base22 / UPS</span>
                  <span className="text-sm pl-1 text-gray-700">September 2021 - March 2024</span>
                  <ul className="text-md space-y-0 list-disc pl-5 mt-4 text-left">
                    <li>Managed UPS' Global Employee Portal in a collaborative team</li>
                    <li>Enhanced performance and UX using HCL Digital Experience, React, and Vue.js</li>
                    <li>Worked under SCRUM methodology to maintain agility and focus</li>
                    <li>Troubleshot and resolved manager-reported issues efficiently</li>
                    <li>Led deployments and bug fixes across CERT and PROD environments</li>
                  </ul>
                </div>
                <img src="/images/logo_base22.svg" alt="UPS logo" className="w-48 h-auto my-4 mx-auto md:my-auto md:ml-auto md:mr-0 flex-shrink-0 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}