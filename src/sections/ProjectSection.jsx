import HeaderSection from '../components/HeaderSection'

import blog from '../assets/demo/blog.png'
import shiganime from '../assets/demo/shiganime.png'
import zeitplan from '../assets/demo/zeitplan.png'
import portofolio1 from '../assets/demo/portofolio.v1.png'

import tailwind from '../assets/skills/tailwind.svg'
import react from '../assets/skills/react.svg'
import node from '../assets/skills/nodejs.png'
import express from '../assets/skills/express.svg'
import mongo from '../assets/skills/mongo.svg'

import { BsArrowRight, BsCodeSlash } from 'react-icons/bs'

const projects = [
  {
    name: 'Blog Pribadi',
    img: blog,
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
    description:
      'Website blog pribadi untuk menulis dan membagikan topik seputar teknologi',
    linkDemo: 'https://radwritter.vercel.app/',
    linkRepo: 'https://github.com/radityaseptian/blog',
  },
  {
    name: 'Shiganime - Streaming Anime',
    img: shiganime,
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
    description: 'Website untuk menonton anime secara online ber-subtitle Inggris',
    linkDemo: 'https://shiganime-en.vercel.app/',
    linkRepo: 'https://github.com/radityaseptian/shiganime',
  },
  {
    name: 'The Zeitplan',
    img: zeitplan,  
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
    description: 'Slicing design figma menjadi website',
    linkDemo: 'https://zeitplan-rho.vercel.app/',
    linkRepo: 'https://github.com/radityaseptian/landing-page',
  },
  {
    name: 'Protofolio Website V1',
    img: portofolio1,
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
    description: 'Website untuk memperkenalkan diri saya',
    linkDemo: 'https://radityaseptian.vercel.app/',
    linkRepo: 'https://github.com/radityaseptian/portofolio',
  },
  {
    name: 'Portofolio Website V2',
    img: portofolio1,
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
    description: 'Website untuk memperkenalkan diri saya',
    linkDemo: 'https://radityaseptian.my.id/',
    linkRepo: 'https://github.com/radityaseptian/portofolio.v2',
  },
]

export default function ProjectSection() {
  return (
    <section id='karya' className='py-16'>
      <HeaderSection title='Karya' description='Karya yang pernah saya buat' />
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map((item) => {
          return (
            <li key={item.name} className='rounded-xl overflow-hidden border'>
              <a
                href={item.linkDemo}
                title={item.name}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={item.img} alt={item.name} />
              </a>
              <div className='p-4'>
                <div className='flex gap-1 justify-between items-center'>
                  <h3 className='text-xl font-poppins font-semibold'>
                    {item.name}
                  </h3>
                  <div className='self-start flex items-center gap-1'>
                    <a
                      href={item.linkRepo}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <BsCodeSlash className='w-6 h-6 box-content p-2 rounded-md bg-slate-100 hover:bg-slate-200' />
                    </a>
                    <a
                      href={item.linkDemo}
                      target='_blank'
                      className='flex items-center gap-1 bg-slate-100 hover:bg-slate-200 p-2 rounded-md'
                    >
                      <span>buka</span>
                      <BsArrowRight />
                    </a>
                  </div>
                </div>
                <p className='py-4'>{item.description}</p>
                <ul className='flex items-center gap-2'>
                  {item.stack.map((item) => {
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
    </section>
  )
}
