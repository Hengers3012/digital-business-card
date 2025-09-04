"use client";
import { useState } from "react";

export default function Home() {
  const [current, setCurrent] = useState(0);

  const slides = [
    // 1️⃣ Presentación personal
    <div
      key="logo"
      className="flex flex-col items-center justify-center h-full space-y-10 text-center bg-gradient-to-br from-[#2b5aab] to-[#292e2c] text-white p-10 rounded-3xl shadow-2xl border-2 border-white/30"
    >
      <img
        src="/logo_3d.png"
        alt="Logo"
        className="w-35 h-35 mb-6 rounded-full shadow-lg border-2 border-white/50 bg-white/30 backdrop-blur-md animate-spin-slow"
      />
      <h1 className="text-3xl font-bold mb-2">Ing. Hengers Rosario</h1>
      <p className="text-lg font-medium ">Ingeniero Electrónico</p>
      <p className="w-100 ext-lg font-medium mb-6">
        Diseño y desarrollo de software & Hardware
      </p>

      <p className="text-sm mb-4 max-w-md text-shadow-md text-gray-300">
        +10 años de experiencia en electrónica y programación, especializado en
        diseño de hardware y desarrollo de software para sistemas embebidos y
        desarrollo web.
      </p>

      <p className="text-sm mb-4 max-w-md">
        ¿Listo para llevar tu proyecto al siguiente nivel?
        <ul className="text-left p-2 list-inside mt-2 space-y-1 text-xs">
          <li className="flex text-left ">
           
            <img
              src="/contact.svg"
              alt="Logo"
              className="w-4 h-4 align-middle mr-2 items-center "
            />
            Contáctame por WhatsApp o Email
          </li>
          <li className="flex text-left align-middle">
       
            <img
              src="/briefcase.svg"
              alt="Logo"
              className="w-4 h-4 align-middle mr-2 items-center "
            />
            Consulta gratuita
          </li>
        </ul>
      </p>
      <section className="w-80 mb-2 border-1 border-b-gray-800"></section>
      <div className="space-y-2 text-xs">
        <p className="flex items-center justify-center text-center ">
       
          <img
            src="/whatsapp.svg"
            alt="Logo"
            className="w-4 h-4 align-middle mr-2 items-center "
          />
          +1 (829) 208-6017
        </p>
        <p className="flex items-center justify-center text-center ">
        
          <img
            src="/gmail.svg"
            alt="Logo"
            className="w-4 h-4 align-middle mr-2 items-center "
          />
          hengersrosario@gmail.com
        </p>
        {/* <p>🌐 www.hengers.dev</p> */}
                <p className="flex items-center justify-center text-center ">
        
          <img
            src="/gps.svg"
            alt="Logo"
            className="w-8 h-8 align-middle mr-0 items-center "
          />Concepción La Vega, Rep. Dominicana</p>
      </div>

      <div className="mt-6 flex space-x-20">
        <a
          href="https://wa.me/18090000000"
          target="_blank"
          className="px-4 py-2 bg-white text-[#4a5cb8] font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          WhatsApp
        </a>
        <a
          href="mailto:contacto@hengers.dev"
          className="px-4 py-2 bg-white text-[#4a5cb8] font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Email
        </a>
      </div>
    </div>,

    // 2️⃣ Servicios
    <div
      key="services"
      className="h-full bg-white/95 text-black backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/30"
    >
      <h2 className="text-2xl font-bold text-[#2b5aab] mb-6 text-center">
        Servicios Especializados
      </h2>
      <div className="space-y-4 test-xs">
        <div className="flex items-start">
          <span className="text-2xl mr-3">⚡</span>
          <p>
            <strong>Diseño de circuitos y PCB:</strong> Hardware confiable y
            optimizado para proyectos industriales, académicos y prototipos
            innovadores.
          </p>
        </div>
        <div className="flex items-start">
          <span className="text-2xl mr-3">💻</span>
          <p>
            <strong>Sistemas embebidos:</strong> Programación de
            microcontroladores y soluciones IoT de alto rendimiento listas para
            producción.
          </p>
        </div>
        <div className="flex items-start">
          <span className="text-2xl mr-3">🌐</span>
          <p>
            <strong>Desarrollo web Full Stack:</strong> Aplicaciones modernas,
            seguras y escalables con interfaces atractivas.
          </p>
        </div>
        <div className="flex items-start">
          <span className="text-2xl mr-3">🏠</span>
          <p>
            <strong>Domótica y automatización:</strong> Control inteligente para
            hogares, oficinas y espacios comerciales.
          </p>
        </div>
        <div className="flex items-start">
          <span className="text-2xl mr-3">📡</span>
          <p>
            <strong>IoT y conectividad:</strong> Integración de dispositivos con
            la nube y monitoreo en tiempo real.
          </p>
        </div>
        <div className="flex items-start">
          <span className="text-2xl mr-3">⚙️</span>
          <p>
            <strong>Consultoría técnica:</strong> Asesoría en diseño, pruebas y
            optimización de proyectos electrónicos y de software.
          </p>
        </div>
        <div className="flex items-start">
          <span className="text-2xl mr-3">🛠️</span>
          <p>
            <strong>Mantenimiento y soporte:</strong> Servicios post-desarrollo
            para asegurar el rendimiento y actualización continua.
          </p>
        </div>
        <div className="flex items-start">
          <span className="text-2xl mr-3">📊</span>
          <p>
            <strong>Otros...</strong>
          </p>
        </div>
      </div>

    </div>,

    // 3️⃣ Proyección / Portafolio
    <div
      key="proyeccion"
      className="bg-white/95 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/30"
    >
      <h2 className="text-2xl font-bold text-[#4a5cb8] mb-6 text-center">
        Proyección & Trabajos
      </h2>
      <p className="text-gray-700 text-sm mb-6">
        Mi visión es expandir soluciones tecnológicas en electrónica, IoT y
        software, creando un impacto positivo en la industria y la sociedad.
      </p>

      <h3 className="text-lg font-semibold mb-3 text-[#2d3748]">
        Proyectos Destacados:
      </h3>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm mb-6">
        <li>
          Dispositivo de medición de ruido ambiental (IoT + microcontroladores)
        </li>
        <li>Aplicaciones web integradas con bases de datos en la nube</li>
        <li>Sistemas de climatización inteligente (domótica/VRF)</li>
        <li>Automatización de procesos industriales</li>
      </ul>

      <h3 className="text-lg font-semibold mb-3 text-[#2d3748]">
        Próximos pasos:
      </h3>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
        <li>Escalar proyectos de IoT a nivel internacional</li>
        <li>Desarrollar soluciones SaaS en electrónica y automatización</li>
        <li>Expandir Smart Air SRL en República Dominicana</li>
      </ul>
    </div>,
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Carrusel */}
      <div className="w-full max-w-md overflow-hidden relative rounded-3xl border-2 border-white/50 shadow-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 bg-transparen border-2 border-gray-600 rounded-3xl p-1 shadow-2xl"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="flex justify-center mt-6 space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === idx ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

