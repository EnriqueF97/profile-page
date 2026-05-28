export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-3 text-center lg:text-left">
          <h2 className="text-3xl font-semibold mb-4 text-white">Contact</h2>
        </div>
        <div className="lg:col-span-9">
          <div className="bg-gradient-to-l from-fuchsia-100 via-amber-50 to-red-100 space-y-4 rounded-2xl p-4 text-center shadow-md transition-transform transform hover:-translate-y-1 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 h-auto flex items-center">
              <img
                src="/images/profile-pic.jpg"
                alt="Enrique Favila"
                className="my-8 md:my-auto rounded-full w-40 h-40 mx-auto border-8 border-white shadow-xl object-cover scale-110"
              />
            </div>
            <div className="lg:col-span-8 space-y-1 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-gray-800 pb-2">Enrique Favila Martínez</span>
              <span className="text-gray-700">Full-Stack Developer • Artificial Intelligence Master's Student</span>
              <span className="text-gray-800 pb-2">enriquefavilamartinez@gmail.com</span>
              <p className="text-gray-700">🇲🇽 +52 777 496 8039</p>
              <p className="text-gray-700">🇪🇸 +34 631 98 44 36</p>
              <div className="flex justify-center gap-8 pt-4">
                <a href="https://www.linkedin.com/in/enriquefavila/" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center text-blue-600 hover:text-blue-800"><i className="bi bi-linkedin text-2xl"></i></a>
                <a href="https://github.com/EnriqueF97" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center text-gray-800 hover:text-black"><i className="bi bi-github text-2xl"></i></a>
                <a href="mailto:enriquefavilamartinez@gmail.com?subject=Let's work together&body=Hi Enrique," className="inline-flex flex-col items-center text-gray-600 hover:text-gray-700"><i className="bi bi-envelope-fill text-2xl"></i></a>
                <a href="https://api.whatsapp.com/send?phone=56963460381" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center text-green-600 hover:text-green-700"><i className="bi bi-whatsapp text-2xl"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}