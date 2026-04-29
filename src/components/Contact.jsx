import { useReveal } from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const headRef = useReveal()
  const ctaRef  = useReveal(0.1)

  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        <div ref={headRef} className="reveal contact__head">
          <p className="section-label">// 04 — Contacto</p>
          <h2 className="section-title">
            ¿Tienes un proyecto<br />
            <span style={{ color: 'var(--accent)' }}>en mente?</span>
          </h2>
          <p className="contact__sub">
            Escríbeme y lo conversamos. Respondo en menos de 24 horas.
          </p>
        </div>

        <div ref={ctaRef} className="reveal contact__cta">
          <a
            href="https://wa.me/573108553691"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary contact__btn"
          >
            💬 Hablar por WhatsApp
          </a>
          <a
            href="mailto:edysong03@gmail.com"
            className="btn-outline contact__btn"
          >
            ✉ edysong03@gmail.com
          </a>
        </div>

        <p className="contact__location">
          <span className="contact__location-dot" />
          Duitama, Colombia — disponible para proyectos remotos
        </p>
      </div>
    </section>
  )
}
