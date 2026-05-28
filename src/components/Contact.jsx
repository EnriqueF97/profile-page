export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-3 text-center lg:text-left">
          <h2 className="text-3xl font-semibold mb-4 text-white">Contact</h2>
        </div>
        <div className="lg:col-span-9">
          <div className="bg-gradient-to-l from-fuchsia-100 via-amber-50 to-red-100 rounded-2xl p-6 shadow-md transition-transform transform hover:-translate-y-1 mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image - 33% */}
              <div className="md:w-1/3 flex items-center">
                <img
                  src="/images/profile-pic.jpg"
                  alt="Enrique Favila"
                  className="rounded-full w-full max-w-[200px] mx-auto  border-white shadow-xxl object-cover aspect-square"
                />
              </div>
              
              {/* Content - 67% */}
              <div className="md:w-2/3 flex flex-col">
                {/* Name and Title - centered across both columns */}
                <div className="lg:text-left text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Enrique Favila Martínez</h3>
                  <p className="text-gray-700">AI Engineer</p>
                </div>
                
                {/* Two columns for contact info and social media */}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left Column - Contact Info */}
                  <div className="md:w-1/2">
                    <div className="space-y-3 lg:items-left items-center">
                      {/* Email */}
                      <div className="flex items-center gap-3">
                        <i className="bi bi-envelope-fill text-gray-600 text-xl w-6"></i>
                        <a href="mailto:enrique.favila@icloud.com" className="text-gray-700 hover:text-gray-900 text-sm">
                          enrique.favila@icloud.com
                        </a>
                      </div>
                      
                      {/* Phone Spain */}
                      <div className="flex items-center gap-3">
                        <i className="bi bi-telephone-fill text-gray-600 text-xl w-6"></i>
                        <span className="text-gray-700 text-sm">+34 631 98 44 36</span>
                        <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded">Spain</span>
                      </div>
                      
                      {/* Phone Mexico */}
                      <div className="flex items-center gap-3">
                        <i className="bi bi-telephone-fill text-gray-600 text-xl w-6"></i>
                        <span className="text-gray-700 text-sm">+52 777 496 8039</span>
                        <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded">Mexico</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Social Media */}
                  <div className="md:w-1/2">
                    <div className="space-y-3">
                      <a
                        href="https://www.linkedin.com/in/enriquefavila/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors"
                      >
                        <i className="bi bi-linkedin text-xl w-6"></i>
                        <span className="text-sm">linkedin.com/in/enriquefavila</span>
                      </a>
                      <a
                        href="https://github.com/EnriqueF97"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
                      >
                        <i className="bi bi-github text-xl w-6"></i>
                        <span className="text-sm">EnriqueF97</span>
                      </a>
                      <a
                        href="https://api.whatsapp.com/send?phone=56963460381"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                      >
                        <i className="bi bi-whatsapp text-xl w-6"></i>
                        <span className="text-sm">WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}