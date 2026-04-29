import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          <span style={{ color: 'var(--accent)' }}>[</span>EG<span style={{ color: 'var(--accent)' }}>]</span>
        </span>
        <p className="footer__copy">
          © {new Date().getFullYear()} Edyson Guevara · Duitama, Colombia
        </p>
        <p className="footer__built">
          built with <span style={{ color: 'var(--accent)' }}>React + Vite</span>
        </p>
      </div>
    </footer>
  )
}
