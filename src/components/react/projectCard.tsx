'use client';
import React, { useRef, useState } from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  status: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, image, status, url }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const statusColors: Record<string, string> = {
    Desplegado: 'bg-emerald-600',
    'En desarrollo': 'bg-purple-500',
  };
  const statusClass = statusColors[status] || 'bg-gray-600';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <article
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative max-w-[600px] overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-lg project-card"
    >
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={`Imagen del proyecto ${name}`}
          className="w-full max-h-[420px] object-cover rounded-2xl"
          loading="lazy"
        />

        {/* Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-10 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(250px circle at ${position.x}px ${position.y}px, rgba(255,255,255, 0.3), transparent 80%)`,
          }}
        />

        <div
          className={`absolute top-4 left-4 z-20 ${statusClass} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md backdrop-blur-sm`}
        >
          {status}
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-5 transition-colors duration-300 group-hover:from-black/95 group-hover:via-black/80">
  <span
    className="text-lg md:text-xl font-semibold text-white drop-shadow-lg"
    aria-label={`Abrir ${name}`}
  >
    {name}
  </span>
  <p className="mt-1 text-sm text-gray-200 drop-shadow-lg line-clamp-3">
    {description}
  </p>
  <div className="mt-3">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition"
    >
      Ver más →
    </a>
  </div>
</div>

      </div>
    </article>
  );
};

export default ProjectCard;
