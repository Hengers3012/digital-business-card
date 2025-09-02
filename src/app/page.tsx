import Image from "/public/logo_3d.png";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2] p-5">
      <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-10 max-w-lg w-full shadow-2xl border border-white/30">

        {/* Floating circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-16 h-16 top-1/5 right-10 bg-blue-700/10 rounded-full animate-float delay-2000"></div>
          <div className="absolute w-10 h-10 bottom-1/3 left-16 bg-blue-700/10 rounded-full animate-float delay-4000"></div>
          <div className="absolute w-7 h-7 top-3/5 right-1/5 bg-blue-700/10 rounded-full animate-float delay-1000"></div>
        </div>

        {/* Header */}
        <div className="text-center relative">
          <div className="w-50 h-50 mx-auto mb-6 relative animate-spin-slow">
            <div className="w-full h-full clip-hex flex items-center justify-center shadow-lg">
              <img
                src="/logo_3d.png"
                alt="Foto de perfil"
                className="w-40 h-40 mx-auto rounded-full"
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#4a5cb8] to-[#2d3748] mb-2">
            Ing. Hengers Rosario
          </h1>
          <p className="text-[#4a5cb8] font-medium text-lg">
            Ingeniero Electrónico | Full Stack Developer
          </p>
        </div>

        {/* Description */}
        <div className="text-left mb-8 text-gray-700 space-y-4 text-sm">
          <p><strong>+12 años de experiencia</strong> en electrónica y programación, especializado en diseño de hardware y desarrollo de software para sistemas embebidos.</p>
          <p><strong>+3 años como Full Stack Developer</strong> con experiencia en Front-End y Back-End.</p>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:rounded before:bg-gradient-to-br from-[#4a5cb8] to-[#2d3748]">
            Tecnologías
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["Sistemas Embebidos", "Hardware Design", "Full Stack", "IoT", "Automatización", "Front-End", "Back-End", "Electrónica"].map(skill => (
              <div key={skill} className="bg-gradient-to-br from-[#4a5cb8] to-[#667eea] text-white text-xs font-medium py-2 px-4 rounded-full text-center shadow hover:translate-y-[-2px] hover:shadow-lg transition-all cursor-pointer">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:rounded before:bg-gradient-to-br from-[#4a5cb8] to-[#2d3748]">
            Servicios Especializados
          </h3>
          {[
            { icon: "⚡", text: "Diseño de circuitos electrónicos y PCB" },
            { icon: "💻", text: "Desarrollo de software para sistemas embebidos" },
            { icon: "🌐", text: "Aplicaciones web Full Stack" },
            { icon: "🏠", text: "Proyectos de domótica y automatización" },
            { icon: "📡", text: "Soluciones IoT y conectividad" },
            { icon: "⚙️", text: "Consultoría en sistemas de control" },
          ].map(service => (
            <div key={service.text} className="flex items-center p-3 mb-2 bg-blue-700/5 rounded-lg hover:bg-blue-700/10 transition-all">
              <div className="w-6 h-6 bg-gradient-to-br from-[#4a5cb8] to-[#667eea] rounded-md flex items-center justify-center text-white font-bold mr-3">{service.icon}</div>
              <div className="text-gray-600 font-medium text-sm">{service.text}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-6 border-t border-blue-700/20 text-center">
          <p className="text-gray-800 font-medium mb-3">¿Listo para llevar tu proyecto al siguiente nivel?</p>
          <div className="flex justify-center flex-wrap gap-5">
            <div className="flex items-center text-[#4a5cb8] font-medium text-sm">
              <span className="mr-2 text-lg">📧</span>Contáctame por WhatsApp
            </div>
            <div className="flex items-center text-[#4a5cb8] font-medium text-sm">
              <span className="mr-2 text-lg">💼</span>Consulta gratuita
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}
