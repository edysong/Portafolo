import './Hero.css'

const stats = [
  { value: '5+',  label: 'Proyectos' },
  { value: '3+',  label: 'Años' },
  { value: '12+', label: 'Tecnologías' },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        {/* Photo */}
        <div className="hero__photo-wrap">
          <div className="hero__photo-corner hero__photo-corner--tl" />
          <div className="hero__photo-corner hero__photo-corner--br" />
          <img
            src="/edyson.jpg"
            alt="Edyson Guevara"
            className="hero__photo"
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
        </div>

        {/* Text */}
        <div className="hero__content">
          <p className="section-label">Disponible para proyectos</p>

          <h1 className="hero__name">
            Edyson<br />
            <span className="hero__name-accent">Guevara</span>
          </h1>

          <p className="hero__title">
            <span className="hero__title-mono">// </span>
            Ingeniero en Sistemas · Full Stack Developer
          </p>

          <p className="hero__desc">
            Construyo aplicaciones web robustas y escalables — desde APIs con NestJS y .NET
            hasta frontends en React. Automatización, cloud Azure y diseño UX/UI incluidos.
          </p>

          <div className="hero__actions">
            <a
              href="https://wa.me/573108553691"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              💬 WhatsApp
            </a>
            <a href="#proyectos" className="btn-outline">Ver proyectos</a>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            {stats.map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">scroll</span>
      </div>
    </section>
  )
}
