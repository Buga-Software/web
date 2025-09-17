import { useState } from "react";

const tabs = [
  {
    id: "web",
    title: "Desarrollo & Diseño Web",
    heading: "Construye tu presencia online",
    description:
      "Creamos sitios rápidos, modernos y optimizados para atraer más clientes.",
    price: "$300.000 COP",
    benefits: [
      "Sitios rápidos y optimizados",
      "Diseño moderno y responsivo",
      "SEO básico incluido",
    ],
    color: "text-green-500 border-green-500 bg-green-950/70",
    image: "web-dev.png",
  },
  {
    id: "marketing",
    title: "Marketing & Publicidad",
    heading: "Haz crecer tu negocio",
    description:
      "Campañas efectivas para posicionar tu marca y atraer más clientes.",
    price: "$100.000 COP",
    benefits: [
      "SEO avanzado",
      "Campañas en Google Ads",
      "Estrategias en redes sociales",
    ],
    color: "text-blue-500 border-blue-500 bg-blue-950/70",
    image: "marketing.png",
  },
  {
    id: "business",
    title: "Soluciones para Negocios",
    heading: "Optimiza procesos",
    description:
      "Implementamos soluciones digitales para que tu negocio crezca.",
    price: "$250.000 COP",
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
      <div className="max-w-7xl bg-[var(--bg-primary)] mx-auto border-x border-zinc-800 py-8 md:py-12 space-y-8 px-4 sm:px-6 lg:px-20">
        {/* Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`p-2 text-sm border font-medium text-center transition-all duration-200 cursor-pointer
                ${
                  active === tab.id
                    ? `${tab.color}`
                    : "text-[var(--text-primary)] opacity-80 border-zinc-800 hover:opacity-100 hover:border-gray-600"
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
                  <h3 className="text-2xl text-[var(--text-primary)] md:text-3xl font-bold">
                    {tab.heading}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-lg font-semibold">
                    {tab.description}
                  </p>

                  <ul className="space-y-3">
                    {tab.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-center md:justify-start text-[var(--text-secondary)]"
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
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col space-y-2">
                    <p className="text-[var(--text-primary)] font-semibold text-xl">
                      Desde {tab.price}
                    </p>
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
            )
        )}
      </div>
    </div>
  );
}
