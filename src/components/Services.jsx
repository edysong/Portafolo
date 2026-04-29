import { useReveal } from '../hooks/useReveal'
import './Services.css'

const TIERS = [
  {
    name: 'Básico',
    mono: '01',
    desc: 'Ideal para presencia digital inicial. Landing page profesional, responsiva y optimizada.',
    features: [
      'Landing page responsiva',
      'Diseño personalizado',
      'Formulario de contacto',
      'Optimización SEO básica',
      'Despliegue incluido',
    ],
    highlight: false,
  },
  {
    name: 'Medio',
    mono: '02',
    desc: 'Solución completa con CMS, diseño Figma y gestión de contenido sin conocimientos técnicos.',
    features: [
      'Sitio web multi-página',
      'Prototipo en Figma',
      'CMS (WordPress / Strapi)',
      'Panel de administración',
      'Optimización de rendimiento',
      'Soporte post-entrega',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    mono: '03',
    desc: 'Aplicación web completa, backend robusto, cloud Azure e integraciones empresariales.',
    features: [
      'App web full stack',
      'Backend C# / .NET o NestJS',
      'Base de datos PostgreSQL',
      'Despliegue en Azure',
      'Contenedores Docker',
      'Automatización con n8n',
      'Consultoría técnica',
    ],
    highlight: false,
  },
]

function TierCard({ tier, index }) {
  const ref = useReveal(0.1)
  return (
    <div
      ref={ref}
      className={`tier-card reveal${tier.highlight ? ' tier-card--highlight' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {tier.highlight && <div className="tier-card__popular">Popular</div>}
      <p className="tier-card__mono">// {tier.mono}</p>
      <h3 className="tier-card__name">{tier.name}</h3>
      <p className="tier-card__desc">{tier.desc}</p>
      <ul className="tier-card__features">
        {tier.features.map(f => (
          <li key={f} className="tier-card__feature">
            <span className="tier-card__check">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/573108553691"
        target="_blank"
        rel="noopener noreferrer"
        className={tier.highlight ? 'btn-primary tier-card__btn' : 'btn-outline tier-card__btn'}
      >
        Solicitar info
      </a>
    </div>
  )
}

export default function Services() {
  const headRef = useReveal()
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <div ref={headRef} className="reveal services__head">
          <p className="section-label">// 02 — Servicios</p>
          <h2 className="section-title">
            Qué puedo<br /><span style={{ color: 'var(--accent)' }}>ofrecerte</span>
          </h2>
        </div>
        <div className="services__grid">
          {TIERS.map((t, i) => <TierCard key={t.name} tier={t} index={i} />)}
        </div>
      </div>
    </section>
  )
}
