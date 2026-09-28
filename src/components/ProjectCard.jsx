export default function ProjectCard({ title, image, description, status, tags = [], links }) {
  return (
    <div className="bg-gradient-to-bl from-zinc-50 to-purple-100 shadow-md rounded-2xl p-4 transition-transform transform hover:-translate-y-1 w-full h-full">
      <div className="flex flex-col gap-4 h-full">
        {/* Image on top, fixed 16:9 frame, never cropped */}
        <div className="aspect-video bg-white rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2">
            <h3 className="font-bold text-xl lg:text-left">{title}</h3>
            {status && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full">
                <i className="bi bi-hourglass-split"></i>
                {status}
              </span>
            )}
          </div>
          <p className="mb-3 lg:text-left">{description}</p>

          {/* Tech tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-3">
              {tags.map((tag) => (
                <span key={tag} className="text-xs font-mono text-slate-700 bg-white border border-slate-300 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Buttons row - aligned to the right */}
          <div className="flex space-x-8 justify-center pt-2 mt-auto">
            {links.map((link, idx) =>
              link.private ? (
                <span
                  key={idx}
                  title="Private repository"
                  className="inline-flex flex-col items-center text-center font-bold text-gray-400 cursor-not-allowed"
                >
                  <i className="bi bi-lock-fill text-2xl"></i>
                  <span className="text-sm">Private repo</span>
                </span>
              ) : (
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
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
