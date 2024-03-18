import Header from './layouts/Header'
import Container from './components/Container'
import About from './sections/About'
import Education from './sections/Education'
import Skill from './sections/Skill'
import Project from './sections/Project'
import Contact from './sections/Contact'
import Footer from './layouts/Footer'

export default function App() {
  return (
      <div className='antialiased bg-slate-50 dark:bg-zinc-800 dark:text-white'>
        <Header />
        <Container>
          <About />
          <Education />
          <Skill />
          <Project />
          <Contact />
        </Container>
        <Footer />
      </div>
  )
}
