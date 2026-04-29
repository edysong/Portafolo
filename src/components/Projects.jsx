import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Projects.css'

const PROJECTS = [
  {
    title: 'ON Content Creator',
    url: 'https://oncontent.co',
    desc: 'Tema WordPress personalizado para agencia audiovisual. Diseño editorial, animaciones custom y arquitectura de contenido optimizada.',
    stack: ['WordPress', 'PHP', 'CSS'],
    badge: null,
  },
  {
    title: 'DylanMP3',
    url: 'https://dylanmp3.vercel.app',
    desc: 'Convertidor de YouTube y TikTok a MP3 con backend propio. Procesamiento de audio con yt-dlp y API REST robusta.',
    stack: ['React', 'Node.js', 'yt-dlp'],
    badge: 'Full Stack',
  },
  {
    title: 'Monteza Events',
    url: 'https://space-salty-26417252.figma.site',
    desc: 'Diseño UI/UX completo para plataforma de wedding planner. Sistema de diseño coherente con identidad de marca elegante.',
    stack: ['Figma', 'UI/UX'],
    badge: 'Diseño',
  },
  {
    title: 'Portafolio Fotógrafo',
    url: 'https://sandy-wager-21710687.figma.site',
    desc: 'Diseño editorial para fotógrafo profesional. Grid asimétrico, tipografía expresiva y galería minimalista de alto impacto.',
    stack: ['Figma', 'UI/UX'],
    badge: 'Diseño',
  },
  {
    title: 'OpticosCare',
    url: 'https://frontend-web-og.vercel.app',
    desc: 'Ecommerce para ópticas en desarrollo activo. Catálogo de productos, carrito, autenticación y panel admin. Backend REST con NestJS y PostgreSQL.',
    stack: ['React', 'NestJS', 'PostgreSQL', 'TypeScript'],
    badge: 'En desarrollo',
  },
  {
    title: 'Bot Orquestado',
    url: null,
    desc: 'Bot empresarial con NestJS como motor backend y n8n como orquestador de flujos. Integraciones de mensajería, CRM y automatización.',
    stack: ['NestJS', 'n8n', 'Node.js'],
    badge: 'Backend',
  },
]

function ProjectCard({ project, index }) {
  const [imgSrc, setImgSrc] = useState(
    project.url
      ? `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`
      : null
  )
  const [imgFailed, setImgFailed] = useState(!project.url)

  const cardRef = useReveal(0.1)

  return (
    <article
      ref={cardRef}
      className="project-card reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="project-card__preview">
        {!imgFailed ? (
          <img
            src={imgSrc}
            alt={project.title}
            className="project-card__img"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="project-card__fallback">
            <span className="project-card__fallback-icon">{'</>'}</span>
          </div>
        )}
        {project.badge && (
          <span
            className="badge project-card__badge"
            {...(project.badge === 'En desarrollo' ? { 'data-wip': '' } : {})}
          >
            {project.badge}
          </span>
        )}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>

        <div className="project-card__stack">
          {project.stack.map(t => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            Ver proyecto →
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const headRef = useReveal()

  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <div ref={headRef} className="reveal projects__head">
          <p className="section-label">// 01 — Proyectos</p>
          <h2 className="section-title">Lo que he<br /><span style={{ color: 'var(--accent)' }}>construido</span></h2>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
