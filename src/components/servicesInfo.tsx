import { useState } from "react";

const tabs = [
  {
    id: "web",
    title: "Desarrollo Web",
    heading: "Construye tu presencia online",
    description: "Creamos sitios rápidos, seguros y optimizados para atraer más clientes.",
    price: "Desde $300.000 COP",
    benefits: [
      "Sitios rápidos y optimizados",
      "Diseño moderno y responsivo",
      "SEO básico incluido",
    ],
    color: "text-pink-500 border-pink-500 bg-pink-950/70",
    image: "web-design.png"
  },
  {
    id: "design",
    title: "Diseño Web",
    heading: "Diseños que Impactan",
    description: "Creamos interfaces atractivas y funcionales que enamoran a tus clientes.",
    price: "Desde $250.000 COP",
    benefits: [
      "Diseños modernos y profesionales",
      "UI/UX centrado en el usuario",
      "Compatible con todos los dispositivos",
    ],
    color: "text-purple-500 border-purple-500 bg-purple-950/70",
  },
  {
    id: "apps",
    title: "Desarrollo de Apps",
    heading: "Aplicaciones Inteligentes",
    description: "Lleva tu idea al siguiente nivel con apps móviles y web personalizadas.",
    price: "Desde $200.000 COP",
    benefits: [
      "Apps nativas o híbridas",
      "Integración con APIs",
      "Escalables y seguras",
    ],
    color: "text-blue-500 border-blue-500 bg-blue-950/70",
  },
  {
    id: "marketing",
    title: "Marketing & Publicidad",
    heading: "Haz crecer tu negocio",
    description: "Campañas efectivas para posicionar tu marca y atraer más clientes.",
    price: "Desde $100.000 COP",
    benefits: [
      "SEO avanzado",
      "Campañas en Google Ads",
      "Estrategias en redes sociales",
    ],
    color: "text-red-500 border-red-500 bg-red-950/70",
  },
  {
    id: "redesign",
    title: "Rediseño de Webs",
    heading: "Transforma tu sitio",
    description: "Renovamos tu web para mejorar su diseño, velocidad y conversión.",
    price: "Desde $180.000 COP",
    benefits: [
      "Optimización de velocidad",
      "Mejora en la experiencia del usuario",
      "Aumento de conversiones",
    ],
    color: "text-green-500 border-green-500 bg-green-950/70",
  },
  {
    id: "business",
    title: "Soluciones para Negocios",
    heading: "Optimiza procesos",
    description: "Implementamos soluciones digitales para que tu negocio crezca.",
    price: "Desde $400.000 COP",
    benefits: [
      "Automatización de procesos",
      "Integración de sistemas",
      "Escalabilidad para tu empresa",
    ],
    color: "text-orange-500 border-orange-500 bg-orange-950/70",
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState("web");

  return (
    <div className="w-full border-y border-zinc-800 box-border relative overflow-hidden">
      { /* Patterns */ }
      <div
        className="absolute inset-0 z-[-10] opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, #262626 1px, transparent 1px),
            linear-gradient(to bottom, #262626 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
      <div className="max-w-7xl bg-black mx-auto border-x border-zinc-800 py-8 md:py-12 space-y-14 px-4 sm:px-6 lg:px-20">
        
        {/* Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`p-2 text-xs md:text-sm border font-medium text-center transition-all duration-200
                ${
                  active === tab.id
                    ? `${tab.color}`
                    : "text-gray-300 border-zinc-800 hover:text-white hover:border-gray-600"
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Card */}
        {tabs.map(
          (tab) =>
            active === tab.id && (
              <div
                key={tab.id}
                className="flex flex-col md:flex-row justify-between gap-10 transition-opacity duration-500"
              >
                {/* Texto */}
                <div className="flex-1 space-y-5 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold">{tab.heading}</h3>
                  <p className="text-gray-400">{tab.description}</p>

                  <ul className="space-y-3">
                    {tab.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-center md:justify-start text-gray-300"
                      >
                        <span className="mr-2 text-green-400">✔</span> {benefit}
                      </li>
                    ))}
                  </ul>

                  <p className="text-lg font-semibold">{tab.price}</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3">
                  {tab.image && (
                    <img src={tab.image} alt={tab.title} className="w-full h-auto" />
                  )}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
