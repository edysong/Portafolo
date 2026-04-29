import { useReveal } from '../hooks/useReveal'
import './Stack.css'

const CATEGORIES = [
  { label: 'Backend',    items: ['C#', '.NET', 'NestJS', 'Node.js'] },
  { label: 'Frontend',   items: ['React', 'Next.js', 'TypeScript', 'Vite'] },
  { label: 'Cloud',      items: ['Azure', 'Docker', 'Vercel'] },
  { label: 'CMS',        items: ['WordPress', 'Strapi'] },
  { label: 'Automation', items: ['n8n', 'GitHub Actions'] },
  { label: 'DB',         items: ['PostgreSQL', 'SQL Server'] },
]

function StackCategory({ cat, delay }) {
  const ref = useReveal(0.1)
  return (
    <div
      ref={ref}
      className="stack__category reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="stack__cat-label">{cat.label}</p>
      <div className="stack__chips">
        {cat.items.map(item => (
          <span key={item} className="stack__chip">{item}</span>
        ))}
      </div>
    </div>
  )
}

export default function Stack() {
  const headRef = useReveal()

  return (
    <section id="stack" className="section stack-section">
      <div className="container">
        <div ref={headRef} className="reveal stack__head">
          <p className="section-label">// 03 — Stack</p>
          <h2 className="section-title">
            Mis<br /><span style={{ color: 'var(--accent)' }}>herramientas</span>
          </h2>
        </div>

        <div className="stack__grid">
          {CATEGORIES.map((cat, i) => (
            <StackCategory key={cat.label} cat={cat} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}
