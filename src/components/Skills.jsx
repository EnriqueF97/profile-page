export default function Skills() {
  const skills = [
    { name: "Python", icon: "bi-filetype-py", iconColor: "text-indigo-500" },
    { name: "JavaScript", icon: "bi-filetype-js", iconColor: "text-yellow-500" },
    { name: "SQL", icon: "bi-database", iconColor: "text-blue-500" },
    { name: "PyTorch", icon: "bi-lightbulb-fill", iconColor: "text-orange-500" },
    { name: "Scikit-learn", icon: "bi-bar-chart-steps", iconColor: "text-green-600" },
    { name: "NLP", icon: "bi-chat-dots-fill", iconColor: "text-blue-500" },
    { name: "Time-Series Forecasting", icon: "bi-graph-up", iconColor: "text-red-500" },
    { name: "Computer Vision", icon: "bi-camera-fill", iconColor: "text-teal-500" },
    { name: "Transformers", icon: "bi-arrow-left-right", iconColor: "text-purple-500" },
    { name: "Pandas", icon: "bi-table", iconColor: "text-indigo-600" },
    { name: "NumPy", icon: "bi-cpu-fill", iconColor: "text-slate-500" },
    { name: "Data Processing", icon: "bi-funnel-fill", iconColor: "text-gray-600" },
    { name: "Feature Engineering", icon: "bi-sliders2", iconColor: "text-blue-600" },
    { name: "Hugging Face", icon: "bi-robot", iconColor: "text-purple-600" },
    { name: "AWS", icon: "bi-cloud", iconColor: "text-orange-500" },
    { name: "FastAPI", icon: "bi-terminal", iconColor: "text-indigo-600" },
    { name: "REST APIs", icon: "bi-node-plus", iconColor: "text-green-600" },
    { name: "Microservices", icon: "bi-diagram-3-fill", iconColor: "text-blue-600" },
    { name: "AWS Lambda", icon: "bi-lightning-charge", iconColor: "text-yellow-600" },
    { name: "MySQL", icon: "bi-database-fill", iconColor: "text-blue-600" },
    { name: "DynamoDB", icon: "bi-database-fill-down", iconColor: "text-orange-600" },
    { name: "DocumentDB", icon: "bi-database-fill-gear", iconColor: "text-green-600" },
    { name: "Git", icon: "bi-github", iconColor: "text-gray-700" },
    { name: "Linux", icon: "bi-terminal-fill", iconColor: "text-gray-700" },
    { name: "Docker", icon: "bi-box-seam", iconColor: "text-sky-600" }
  ]

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-3 text-center lg:text-left">
          <h2 className="text-3xl font-semibold mb-4 text-white">Skills</h2>
        </div>
        <div className="lg:col-span-9">
          <div className="bg-gradient-to-t from-white to-indigo-50 p-8 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-800 text-left justify-items-center lg:justify-items-start">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 w-full">
                  <i className={`bi ${skill.icon} ${skill.iconColor} text-xl`}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}