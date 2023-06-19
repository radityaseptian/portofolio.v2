import Header from './layouts/Header'
import Container from './components/Container'
import AboutSection from './sections/AboutSection'
import EducationSection from './sections/EducationSection'
import SkillSection from './sections/SkillSection'
import ProjectSection from './sections/ProjectSection'
import ContactSection from './sections/ContactSection'

import Footer from './layouts/Footer'

export default function App() {
  return (
    <>
      <div className='antialiased'>
        <Header />
        <Container>
          <AboutSection />
          <EducationSection />
          <SkillSection />
          <ProjectSection />
          <ContactSection />
        </Container>
        <Footer />
      </div>
    </>
  )
}
