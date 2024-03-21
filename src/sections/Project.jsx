import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'

import blogImg from '../assets/demo/blog.webp'
import shiganimeImg from '../assets/demo/shiganime.webp'
import zeitplanImg from '../assets/demo/zeitplan.webp'
import portofolio1Img from '../assets/demo/portofolio.webp'
import portofolio2Img from '../assets/demo/portofolio.v2.webp'
import walagraf from '../assets/demo/walagraf.webp'

import tailwind from '../assets/skills/tailwind.svg'
import react from '../assets/skills/react.svg'
import node from '../assets/skills/nodejs.png'
import express from '../assets/skills/express.svg'
import mongo from '../assets/skills/mongo.svg'
import socket from '../assets/skills/socket.svg'
import typescript from '../assets/skills/typescript.svg'

export default function ProjectSection() {
  const projects = [
    {
      name: 'Walagraf',
      description:
        '[DALAM PENGEMBANGAN] Whatsapp + Telegram clone multi akun sinkron dengan official akun',
      img: walagraf,
      linkDemo: 'https://github.com/radityaseptian/walagraf',
      linkRepo: 'https://github.com/radityaseptian/walagraf',
      stack: [
        {
          name: 'React.JS',
          icon: react,
        },
        {
          name: 'Typescript',
          icon: typescript,
        },
        {
          name: 'Tailwind.CSS',
          icon: tailwind,
        },
        {
          name: 'Node.JS',
          icon: node,
        },
        {
          name: 'Express.JS',
          icon: express,
        },
        {
          name: 'Socket.IO',
          icon: socket,
        },
        {
          name: 'MongoDB',
          icon: mongo,
        },
      ],
    },
    {
      name: 'Blog Pribadi',
      description: 'Website blog pribadi untuk menulis dan membagikan topik seputar teknologi',
      img: blogImg,
      linkDemo: 'https://radwritter.vercel.app/',
      linkRepo: 'https://github.com/radityaseptian/blog',
      stack: [
        {
          name: 'React.JS',
          icon: react,
        },
        {
          name: 'Tailwind.CSS',
          icon: tailwind,
        },
        {
          name: 'Node.JS',
          icon: node,
        },
        {
          name: 'Express.JS',
          icon: express,
        },
        {
          name: 'MongoDB',
          icon: mongo,
        },
      ],
    },
    {
      name: 'Shiganime - Streaming Anime',
      description: 'Website untuk menonton anime secara online ber-subtitle Inggris',
      img: shiganimeImg,
      linkDemo: 'https://shiganime-en.vercel.app/',
      linkRepo: 'https://github.com/radityaseptian/shiganime',
      stack: [
        {
          name: 'React.JS',
          icon: react,
        },
        {
          name: 'Tailwind.CSS',
          icon: tailwind,
        },
      ],
    },
    {
      name: 'The Zeitplan',
      description: 'Slicing design figma menjadi website',
      img: zeitplanImg,
      linkDemo: 'https://zeitplan-rho.vercel.app/',
      linkRepo: 'https://github.com/radityaseptian/landing-page',
      stack: [
        {
          name: 'React.JS',
          icon: react,
        },
        {
          name: 'Tailwind.CSS',
          icon: tailwind,
        },
      ],
    },
    {
      name: 'Portofolio Website V1',
      description: 'Website untuk memperkenalkan diri saya',
      img: portofolio1Img,
      linkDemo: 'https://radityaseptian.vercel.app/',
      linkRepo: 'https://github.com/radityaseptian/portofolio',
      stack: [
        {
          name: 'React.JS',
          icon: react,
        },
        {
          name: 'Tailwind.CSS',
          icon: tailwind,
        },
      ],
    },
    {
      name: 'Portofolio Website V2',
      description: 'Website untuk memperkenalkan diri saya',
      img: portofolio2Img,
      linkDemo: 'https://radityaseptian.my.id/',
      linkRepo: 'https://github.com/radityaseptian/portofolio.v2',
      stack: [
        {
          name: 'React.JS',
          icon: react,
        },
        {
          name: 'Tailwind.CSS',
          icon: tailwind,
        },
      ],
    },
  ]

  return (
    <Section id='karya'>
      <HeaderSection title='Karya' description='Karya yang pernah saya buat' />
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map(({ name, description, img, linkDemo, linkRepo, stack }) => {
          return (
            <li
              key={name}
              className='rounded-xl overflow-hidden border dark:border-zinc-700 bg-white dark:bg-[#242424]'
            >
              <a href={linkDemo} title={name} target='_blank' rel='noopener noreferrer'>
                <img src={img} alt={name} />
              </a>
              <div className='p-4'>
                <div className='flex gap-1 justify-between items-center'>
                  <h3 className='text-xl font-poppins font-semibold'>{name}</h3>
                  <div className='self-start flex items-center gap-1'>
                    <a
                      href={linkRepo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='whitespace-nowrap text-lg py-1.5 px-2 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-950'
                    >
                      {'</>'}
                    </a>
                    <a
                      href={linkDemo}
                      target='_blank'
                      className='flex items-center gap-1 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-950 p-2 rounded-md'
                    >
                      <span>buka</span>
                      <span>&#11162;</span>
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
        })}
      </ul>
    </Section>
  )
}
