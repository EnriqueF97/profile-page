export default function Education() {
  const education = [
    {
      university: "Erasmus Mundus Joint Master Degree (EMAI)",
      degree: "M.Sc. Artificial Intelligence and Cybersecurity",
      description: "Joint master's programme in Artificial Intelligence, co-funded by the European Union and taught across several European universities. The EMAI offers 4 specializations; my chosen specialization is AI and Cybersecurity.",
      locations: "Spain - Italy - United Kingdom - The Netherlands",
      date: "2024 - 2026",
      achievements: [
        "Universitat Pompeu Fabra (Barcelona, Spain): Machine Learning, Reinforcement Learning, Natural Language Processing, and Autonomous Systems.",
        "Sapienza University of Rome (Italy): Artificial Intelligence, Computer Vision, and Databases for Data Management.",
        "University College London (UK): Attended research conferences on current and emerging state-of-the-art AI, and presented a poster on the Maybe Obstacle project.",
        "Radboud University (Nijmegen, The Netherlands): Cryptography, Online Tracking and Privacy, Software Security, Generative AI, Autoencoders, and Transformer architectures for financial applications. Master's thesis carried out as an internship at Hammer Market Intelligence, modelling news-driven liquidity dynamics in WTI crude oil."
    ],
      logo: "/images/logo_emai.png",
      background: "to-red-100"
    },
    {
      university: "Czech Technical University in Prague",
      degree: "Network Security and ML Exchange Course",
      locations: "Prague, Czech Republic",
      date: "May 2018 - Jul 2018",
      achievements: [
        "Specialized course in Network Security using Kali Linux, Wireshark, and other cybersecurity tools.",
        "Introduction to Machine Learning, including unsupervised learning techniques."
      ],
      logo: "/images/ctu.png",
      background: "to-indigo-50"
    },
    {
      university: "Monterrey Institute of Technology and Higher Education",
      degree: "B.Sc. in Computer Science",
      locations: "Cuernavaca, México",
      date: "Aug 2015 - Jun 2020",
      achievements: [
        "Coursework focused on Intelligent Systems, Web Development, Database Modelling, Networks, and C Programming.",
        "Exchange at Czech Technical University in Prague, in Machine Learning and Network Security."
      ],
      logo: "/images/itesm.png",
      background: "to-gray-100"
    }
  ]

  return (
    <section id="education" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-semibold mb-4 lg:text-left text-center text-white">Education</h2>
        </div>
        <div className="lg:col-span-9">
          <div className="space-y-4 text-left">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-l from-white ${edu.background} p-4 rounded-2xl shadow-md text-center md:text-left transition-transform transform hover:-translate-y-1`}
              >
                <div className="flex md:flex-row flex-col-reverse justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-700">{edu.university}</h3>
                    {edu.degree && <p className="text-md font-semibold text-gray-600">{edu.degree}</p>}
                    <span className="text-sm text-gray-600">{edu.locations}</span>
                    <span className="text-sm pl-1 text-gray-500">| {edu.date}</span>
                    {edu.description && <p className="text-md mt-1 text-gray-900">{edu.description}</p>}
                    <ul className="text-md space-y-1 list-disc pl-5 mt-4 text-left">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <img
                    src={edu.logo}
                    alt={`${edu.university} logo`}
                    className="w-48 h-auto my-4 mx-auto md:my-auto md:ml-auto md:mr-0 flex-shrink-0 rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}