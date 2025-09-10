import { useState } from "react";

const tabs = [
  {
    id: "web",
    title: "Desarrollo Web",
    heading: "Construye tu presencia online",
    description:
      "Creamos sitios rápidos, seguros y optimizados para atraer más clientes.",
    price: "$299.000 COP",
    benefits: [
      "Sitios rápidos y optimizados",
      "Diseño moderno y responsivo",
      "SEO básico incluido",
    ],
    color: "text-pink-500 border-pink-500 bg-pink-950/70",
    image: "web-dev.png",
  },
  {
    id: "design",
    title: "Diseño Web",
    heading: "Diseños que Impactan",
    description:
      "Creamos interfaces atractivas y funcionales que enamoran a tus clientes.",
    price: "$249.000 COP",
    benefits: [
      "Diseños modernos y profesionales",
      "UI/UX centrado en el usuario",
      "Compatible con todos los dispositivos",
    ],
    color: "text-purple-500 border-purple-500 bg-purple-950/70",
    image: "web-design.png",
  },
  {
    id: "apps",
    title: "Desarrollo de Apps",
    heading: "Aplicaciones Inteligentes",
    description:
      "Lleva tu idea al siguiente nivel con apps móviles y web personalizadas.",
    price: "$199.000 COP",
    benefits: [
      "Apps nativas o híbridas",
      "Integración con APIs",
      "Escalables y seguras",
    ],
    color: "text-blue-500 border-blue-500 bg-blue-950/70",
    image: "mobile-dev.png",
  },
  {
    id: "marketing",
    title: "Marketing & Publicidad",
    heading: "Haz crecer tu negocio",
    description:
      "Campañas efectivas para posicionar tu marca y atraer más clientes.",
    price: "$99.000 COP",
    benefits: [
      "SEO avanzado",
      "Campañas en Google Ads",
      "Estrategias en redes sociales",
    ],
    color: "text-red-500 border-red-500 bg-red-950/70",
    image: "marketing.png",
  },
  {
    id: "redesign",
    title: "Rediseño de Webs",
    heading: "Transforma tu sitio",
    description:
      "Renovamos tu web para mejorar su diseño, velocidad y conversión.",
    price: "Desde $179.000 COP",
    benefits: [
      "Optimización de velocidad",
      "Mejora en la experiencia del usuario",
      "Aumento de conversiones",
    ],
    color: "text-green-500 border-green-500 bg-green-950/70",
    image: "redesign.png",
  },
  {
    id: "business",
    title: "Soluciones para Negocios",
    heading: "Optimiza procesos",
    description:
      "Implementamos soluciones digitales para que tu negocio crezca.",
    price: "Desde $399.000 COP",
    benefits: [
      "Automatización de procesos",
      "Integración de sistemas",
      "Escalabilidad para tu empresa",
    ],
    color: "text-orange-500 border-orange-500 bg-orange-950/70",
    image: "solutions.png",
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState("web");

  return (
    <div className="w-full border-y border-zinc-800 box-border relative overflow-hidden">
      {/* Patterns */}
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
      <div className="max-w-7xl bg-black mx-auto border-x border-zinc-800 py-8 md:py-12 space-y-8 px-4 sm:px-6 lg:px-20">
        {/* Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`p-2 text-sm border font-medium text-center transition-all duration-200 cursor-pointer
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
                className="flex flex-col md:flex-row items-stretch justify-between gap-10 transition-opacity duration-500"
              >
                {/* Texto */}
                <div className="flex-1 space-y-5 text-center md:text-left">
                  <h3 className="text-2xl text-white md:text-3xl font-bold">
                    {tab.heading}
                  </h3>
                  <p className="text-gray-300 text-lg font-semibold">
                    {tab.description}
                  </p>

                  <ul className="space-y-3">
                    {tab.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-center md:justify-start text-gray-300"
                      >
                        <span className="mr-2 text-green-400">
                          <svg
                            className="size-5"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>{" "}
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col space-y-2">
                    <p className="text-white font-semibold text-xl">Desde {tab.price}</p>
                  </div>
                </div>

                {/* Imagen */}
                <div className="w-0 md:w-1/4 lg:w-1/5">
                  {tab.image && (
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
}
