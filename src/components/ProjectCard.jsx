export default function ProjectCard({ title, image, description, links }) {
  return (
    <div className="bg-gradient-to-bl from-zinc-50 to-purple-100 shadow-md rounded-2xl p-4 transition-transform transform hover:-translate-y-1 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image - 33% */}
        <div className="md:w-1/3">
          <img 
            src={image} 
            alt={title} 
            className="rounded-xl w-full h-full object-cover" 
          />
        </div>
        
        {/* Content - 67% */}
        <div className="md:w-2/3 flex flex-col">
          <h3 className="font-bold text-xl mb-2 lg:text-left">{title}</h3>
          <p className="mb-3 lg:text-left">{description}</p>
          
          {/* Buttons row - aligned to the right */}
          <div className="flex space-x-8 justify-center pt-2 mt-auto">
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
      </div>
    </div>
  )
}