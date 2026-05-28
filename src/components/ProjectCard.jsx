export default function ProjectCard({ title, image, description, team, links }) {
  return (
    <div className="flex flex-col bg-gradient-to-bl from-zinc-50 to-purple-100 shadow-md rounded-2xl p-4 transition-transform transform hover:-translate-y-1">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <img src={image} alt={title} className="mb-6 rounded-xl h-75 max-h-75 object-contain" />
      <p>{description}</p>
      {team && <p className="mt-2"><strong>Team: {team}</strong></p>}
      <div className="mt-auto flex space-x-8 justify-center pt-4">
        {links.map((link, idx) => (
          <a 
            key={idx} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`inline-flex flex-col items-center text-center font-bold ${link.color} transition-colors duration-300`}
          >
            <i className={`bi ${link.icon} text-2xl`}></i>
            <span className="text-sm">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}