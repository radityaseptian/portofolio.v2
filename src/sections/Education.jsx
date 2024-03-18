import { useState } from 'react'
import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import EducationContent from '../components/EducationContent'

export default function EducationSection() {
  const [tab, setTab] = useState(1)

  const formal = [
    {
      title: 'SMK Sandikta',
      date: '2020 - 2023',
      description: 'Teknik Komputer dan Jaringan',
    },
    {
      title: 'Rezcom System',
      date: '2022',
      description: 'Magang / PKL menjadi IT Support',
    },
  ]

  const nonFormal = [
    {
      title: 'Backend Developer',
      date: '2023 - Sekarang',
      description:
        'Node.JS, Express.JS, Basic auth, JWT, Routing, Middleware, Upload file, Komunikasi Realtime, Scrapping, Web Automation, Cron job',
    },
    {
      title: 'Database',
      date: '2023 - Sekarang',
      description:
        'MongoDB, Mencari data, membuat data, mengedit data, menghapus data, mencari data berdasarkan regex',
    },
    {
      title: 'Frontend Framework / Library',
      date: '2022 - Sekarang',
      description: 'Tailwind.CSS, React.JS, Kondisi rendering, React.JS Hooks, React.JS Routing',
    },
    {
      title: 'Javascript',
      date: '2022',
      description:
        'Dasar, Tipe data, Perulangan, Perkondisian, Function, DOM, ES6, Promise, Async/Await',
    },
    {
      title: 'HTML - CSS',
      date: '2022',
      description:
        'Cara membuat tag, Semantic element, Nested, Attribut, Link, HTML5, CSS dasar, Layouting, Flexbox, Grid, Transition',
    },
  ]

  return (
    <Section id='edukasi'>
      <HeaderSection title='Edukasi' description='Perjalanan saya' />
      <div>
        <ul className='flex gap-4 md:gap-6 justify-center font-semibold text-black'>
          <li
            onClick={() => setTab(1)}
            className={`${
              tab === 1
                ? 'bg-blue-600 dark:bg-blue-600 text-white'
                : 'dark:bg-zinc-900 hover:bg-blue-200 dark:hover:bg-zinc-950'
            } px-4 py-2 bg-blue-100 dark:text-white cursor-pointer rounded-md`}
          >
            Non-Formal
          </li>
          <li
            onClick={() => setTab(2)}
            className={`${
              tab === 2
                ? 'bg-blue-600 dark:bg-blue-600 text-white'
                : ' dark:bg-zinc-900 hover:bg-blue-200 dark:hover:bg-zinc-950'
            } px-4 py-2 bg-blue-100 dark:text-white cursor-pointer rounded-md`}
          >
            Formal
          </li>
        </ul>
        <div className='pt-10'>
          {tab === 1 && <EducationContent data={nonFormal} />}
          {tab === 2 && <EducationContent data={formal} />}
        </div>
      </div>
    </Section>
  )
}
