import useLanguage from '../context/LanguageContext'
import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
export default function AboutSection() {
  const { language } = useLanguage()

  // ==== Language
  const id = language?.header?.navbar[1]?.name
  const title = language?.about?.title
  const description = language?.about?.description
  const paraf1 = language?.about?.paragraf1
  const paraf2 = language?.about?.paragraf2

  return (
    <Section id={id}>
      <HeaderSection title={title} description={description} />
      <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10'>
        <img
          src='/profile.jpg'
          className='rounded-3xl w-60 md:w-auto md:max-w-sm'
        />
        <div className='flex-1'>
          <p>
            {paraf1}
            <br />
            <br />
            {paraf2}
          </p>
        </div>
      </div>
    </Section>
  )
}
