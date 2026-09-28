export default function Experience() {
  const experiences = [
    {
      title: "AI Engineer Intern",
      company: "Hammer Market Intelligence",
      companyColor: "text-blue-600",
      location: "Arnhem, The Netherlands",
      date: "Jan 2026 - Jul 2026",
      achievements: [
        "Designed and trained a Temporal Fusion Transformer (TFT) to model how news sentiment and geopolitical events affect WTI crude oil liquidity.",
        "Built a production LLM pipeline using Anthropic's API to extract structured multi-field signals from thousands of news articles; evaluated outputs against a held-out reference set using human and cross-model annotations.",
        "Automated news scraping pipelines and engineered multi-signal datasets for financial time-series analysis.",
        "Co-developed an NLP pipeline analyzing 100k+ Reddit discussions to extract sentiment and provider-level insights across major LLM platforms."
      ],
      logo: "/images/hammer.png",
      background: "to-indigo-100"
    },
    {
      title: "Software Engineer & Team Lead",
      company: "Kodevox",
      companyColor: "text-blue-600",
      location: "México City, México",
      date: "Mar 2024 - Dec 2024",
      achievements: [
        "Led a team of 3 junior engineers for 7 months: assigned work, reviewed code, ran sprint planning, and supported onboarding.",
        "Engineered backend services in Python/FastAPI following Hexagonal Architecture and DDD principles, plus React components in a micro-frontend architecture.",
        "Delivered full-stack features for a national broadcaster's internal media management portal, on AWS using REST-based microservices.",
        "Designed SQL database schemas and contributed to scalable backend system architecture."
      ],
      logo: "/images/logo_kodevox.png",
      background: "to-orange-50"
    },
    {
      title: "Software Engineer",
      company: "Base22",
      companyColor: "text-blue-500",
      location: "Nuevo León, México",
      date: "Sep 2021 - Mar 2024",
      achievements: [
        "Managed deployments, debugging, and production issue resolution on UPS' global employee portal across CERT and PROD environments.",
        "Contributed to the development and maintenance of the portal using React, Vue.js, and HCL Digital Experience.",
        "Improved application usability and implemented UX enhancements based on stakeholder requirements."
      ],
      logo: "/images/logo_base22.svg",
      background: "to-indigo-50"
    },
    {
      title: "Software Engineer",
      company: "Vonaut",
      companyColor: "text-blue-600",
      location: "México City, México",
      date: "Jun 2020 - Sep 2021",
      achievements: [
        "Delivered a cloud-native inventory management platform integrating MercadoLibre and Amazon Store APIs.",
        "Built serverless backend microservices using AWS Lambda and DynamoDB, with CI/CD deployment pipelines.",
        "Developed Single Page Applications (SPA) using React functional components."
      ],
      logo: "/images/vonaut.png",
      background: "to-fuchsia-50"
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
                className={`bg-gradient-to-r from-white ${exp.background} p-4 rounded-2xl shadow-md text-center md:text-left transition-transform transform hover:-translate-y-1`}
              >
                <div className="flex md:flex-row flex-col-reverse justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-700">{exp.title}</h3>
                    <span className={`text-sm font-bold ${exp.companyColor}`}>{exp.company}</span>
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
                    loading="lazy"
                    decoding="async"
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