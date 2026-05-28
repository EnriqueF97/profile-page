export default function Certifications() {
  const certifications = [
    {
      title: "2nd place out of 63 teams in Autonomous Systems PacMan CTF Agent Tournament",
      issuer: "Erasmus Mundus Master in AI",
      issuerColor: "text-purple-600",
      year: "2024"
    },
    {
      title: "Scholarship for the Erasmus Mundus Master degree (27 accepted out of +1000 applications)",
      issuer: "Erasmus Mundus Master in AI",
      issuerColor: "text-purple-600",
      year: "2024"
    },
    {
      title: "English C1 - Overall Band Score: 7.5",
      issuer: "IELTS",
      issuerColor: "text-red-600",
      year: "2023"
    },
    {
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      issuerColor: "text-yellow-600",
      year: "2023"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      issuerColor: "text-yellow-600",
      year: "2023"
    },
    {
      title: "Full-Stack Development with React & Node.js",
      issuer: "Coursera",
      issuerColor: "text-blue-600",
      year: "2023"
    },
  ]

  // Group certifications by year
  const groupedByYear = certifications.reduce((groups, cert) => {
    const year = cert.year
    if (!groups[year]) {
      groups[year] = []
    }
    groups[year].push(cert)
    return groups
  }, {})

  // Sort years in descending order
  const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a)

  return (
    <section id="certifications" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-semibold mb-4 lg:text-left text-center text-white">Certifications</h2>
        </div>
        <div className="lg:col-span-9">
          <div className="relative border-l-4 border-white-600 rounded-md space-y-4">
            {sortedYears.map((year) => (
              <div key={year} className="relative pl-10">
                <div className="absolute left-2 top-7 w-6 h-6 text-white text-xs font-bold flex items-center justify-center rounded-full">
                  {year}
                </div>
                <div className="space-y-4 mt-2">
                  {groupedByYear[year].map((cert, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-stone-100 via-amber-50 to-zinc-200 p-4 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1"
                    >
                      <p className="text-lg font-semibold text-gray-700">{cert.title}</p>
                      {cert.issuer && <span className={`${cert.issuerColor} text-sm`}>{cert.issuer}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}