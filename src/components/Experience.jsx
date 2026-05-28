export default function Experience() {
  // Map background names to actual Tailwind classes
  const getBackgroundClass = (bg) => {
    const backgrounds = {
      'red-100': 'to-red-100',
      'orange-50': 'to-orange-50',
      'indigo-50': 'to-indigo-50',
      'fuchsia-50': 'to-fuchsia-50',
      'gray-100': 'to-gray-100'
    }
    return backgrounds[bg] || 'to-gray-100'
  }

  const experiences = [
    {
      title: "AI Engineer Internship",
      company: "Hammer Market Intelligence",
      companyColor: "blue-600",
      location: "The Netherlands",
      date: "Feb 2026 - present",
      achievements: [
        "Researched the impact of news sentiment and geopolitical events on WTI crude oil liquidity dynamics.",
        "Built automated news scraping pipelines and engineered multi-signal datasets for financial time-series analysis.",
        "Developed and trained a Temporal Fusion Transformer (TFT) model for liquidity forecasting in commodity markets.",
        "Co-developed an NLP pipeline analyzing 100k+ Reddit discussions to extract sentiment and provider-level insights across major LLM platforms."
      ],
      logo: "/images/hammer.png",
      background: "indigo-100"
    },
    {
      title: "Full Stack Developer",
      company: "Kodevox Consultory",
      companyColor: "blue-600",
      location: "México City, México",
      date: "Mar 2024 - Dec 2024",
      achievements: [
        "Developed backend services using Python FastAPI following Hexagonal Architecture and Domain-Driven Design (DDD) principles.",
        "Built and maintained cloud native applications using AWS services and REST based microservices.",
        "Designed SQL database schemas and contributed to scalable backend system architecture.",
        "Developed frontend components using React and microfrontend architectures.",
        "Worked in Linux-based development environments with git based version control workflows."
      ],
      logo: "/images/logo_kodevox.png",
      background: "orange-50"
    },
    {
      title: "Front End Developer",
      company: "Base22 Consultory",
      companyColor: "blue-500",
      location: "Nuevo León, México",
      date: "Sep 2021 - Mar 2024",
      achievements: [
        "Contributed to the development and maintenance of UPS' global employee portal using React, Vue.js, and HCL Digital Experience.",
        "Improved application usability and implemented UX enhancements based on stakeholder requirements.",
        "Managed deployments, debugging, and production issue resolution across CERT and PROD environments."
      ],
      logo: "/images/logo_base22.svg",
      background: "indigo-50"
    },
    {
      title: "Cloud Developer",
      company: "Vonaut",
      companyColor: "blue-600",
      location: "México City, México",
      date: "Jun 2020 - Sep 2021",
      achievements: [
        "Developed a cloud-native inventory management platform integrating MercadoLibre and Amazon Store APIs.",
        "Built serverless backend microservices using AWS Lambda and DynamoDB.",
        "Developed Single Page Applications (SPA) using React functional components.",
        "Implemented CI/CD workflows and cloud deployment pipelines in AWS environments."
      ],
      logo: "/images/vonaut.png",
      background: "fuchsia-50"
    }
  ]

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-semibold mb-4 lg:text-left text-center text-white">Experience</h2>
        </div>
        <div className="lg:col-span-9">
          <div className="space-y-4 text-left">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-r from-white ${getBackgroundClass(exp.background)} p-4 rounded-2xl shadow-md text-center md:text-left transition-transform transform hover:-translate-y-1`}
              >
                <div className="flex md:flex-row flex-col-reverse justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-700">{exp.title}</h3>
                    <span className={`text-sm font-bold text-${exp.companyColor}`}>{exp.company}</span>
                    <span className="text-sm pl-1 text-gray-700">{exp.location}</span>
                    <span className="text-sm pl-1 text-gray-500">| {exp.date}</span>
                    <ul className="text-md space-y-1 list-disc pl-5 mt-4 text-left">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
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