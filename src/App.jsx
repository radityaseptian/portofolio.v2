import Header from './layouts/Header'
import AboutSection from './sections/AboutSection'
import SkillSection from './sections/SkillSection'
import ProjectSection from './sections/ProjectSection'
import Container from './components/Container'

// import Footer from './layouts/Footer'

export default function App() {
  return (
    <>
      <div className='antialiased'>
        <Header />
        <Container>
          <AboutSection />
          <SkillSection />
          <ProjectSection />
        </Container>
      </div>
    </>
  )
}
