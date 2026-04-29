import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios',  href: '#servicios'  },
  { label: 'Stack',      href: '#stack'      },
  { label: 'Contacto',  href: '#contacto'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo">
          <span className="navbar__logo-bracket">[</span>EG<span className="navbar__logo-bracket">]</span>
        </a>

        <nav className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/573108553691"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary navbar__cta"
            onClick={() => setOpen(false)}
          >
            Contactar
          </a>
        </nav>

        <button
          className={`navbar__burger${open ? ' navbar__burger--open' : ''}`}
          aria-label="Menú"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
