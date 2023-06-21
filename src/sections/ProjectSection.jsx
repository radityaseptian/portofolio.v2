import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import useLanguage from '../context/LanguageContext'

import { BsArrowRight, BsCodeSlash } from 'react-icons/bs'

export default function ProjectSection() {
  const { language } = useLanguage()

  // ==== Language
  const id = language?.header?.navbar[4].name
  const title = language?.projects?.title
  const description = language?.projects?.description
  const projects = language?.projects?.works

  return (
    <Section id={id}>
      <HeaderSection title={title} description={description} />
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map(
          ({ name, description, img, linkDemo, linkRepo, stack }) => {
            return (
              <li
                key={name}
                className='rounded-xl overflow-hidden border dark:border-zinc-700 bg-white dark:bg-[#242424]'
              >
                <a
                  href={linkDemo}
                  title={name}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={img} alt={name} />
                </a>
                <div className='p-4'>
                  <div className='flex gap-1 justify-between items-center'>
                    <h3 className='text-xl font-poppins font-semibold'>
                      {name}
                    </h3>
                    <div className='self-start flex items-center gap-1'>
                      <a
                        href={linkRepo}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <BsCodeSlash className='w-6 h-6 box-content p-2 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-950' />
                      </a>
                      <a
                        href={linkDemo}
                        target='_blank'
                        className='flex items-center gap-1 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-950 p-2 rounded-md'
                      >
                        <span>
                          {language.country === 'en' ? 'open' : 'buka'}
                        </span>
                        <BsArrowRight />
                      </a>
                    </div>
                  </div>
                  <p className='py-4'>{description}</p>
                  <ul className='flex items-center gap-2'>
                    {stack.map((item) => {
                      return (
                        <li key={item.name} title={item.name}>
                          <img src={item.icon} className='h-8 w-8' />
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </li>
            )
          }
        )}
      </ul>
    </Section>
  )
}
