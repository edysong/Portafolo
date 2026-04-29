import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Stack    from './components/Stack'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
