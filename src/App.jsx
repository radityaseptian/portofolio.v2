import { LanguageProvider } from './context/LanguageContext'
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
      <LanguageProvider>
        <div className='antialiased bg-slate-50 dark:bg-zinc-800 dark:text-white'>
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
      </LanguageProvider>
    </>
  )
}
