import HeaderSection from '../components/HeaderSection'

import blog from '../assets/demo/blog.png'
import shiganime from '../assets/demo/shiganime.png'
import zeitplan from '../assets/demo/zeitplan.png'
import portofolio1 from '../assets/demo/portofolio.v1.png'

import tailwind from '../assets/skills/tailwind.svg'
import react from '../assets/skills/tailwind.svg'
import node from '../assets/skills/nodejs.png'
import express from '../assets/skills/express.svg'
import mongo from '../assets/skills/mongo.svg'

import { BsArrowRight, BsCodeSlash } from 'react-icons/bs'

const projects = [
  {
    name: 'Blog Pribadi',
    img: blog,
    stack: [react, tailwind, node, express, mongo],
    description:
      'Website blog pribadi untuk menulis dan membagikan topik seputar teknologi',
    linkDemo: 'https://radwritter.vercel.app/',
    linkRepo: 'https://github.com/radityaseptian/blog',
  },
  {
    name: 'Shiganime Streaming Anime',
    img: shiganime,
    stack: [react, tailwind],
    description: 'Website streaming untuk menonton anime ber-subtitle Inggris',
    linkDemo: 'https://shiganime-en.vercel.app/',
    linkRepo: 'https://github.com/radityaseptian/shiganime',
  },
  {
    name: 'The Zeitplan',
    img: zeitplan,
    stack: [react, tailwind],
    description: 'Slicing design figma menjadi website',
    linkDemo: 'https://zeitplan-rho.vercel.app/',
    linkRepo: 'https://github.com/radityaseptian/landing-page',
  },
  {
    name: 'Protofolio Website V1',
    img: portofolio1,
    stack: [react, tailwind],
    description: 'Website untuk memperkenalkan diri saya',
    linkDemo: 'https://radityaseptian.vercel.app/',
    linkRepo: 'https://github.com/radityaseptian/portofolio',
  },
  {
    name: 'Portofolio Website V2',
    img: portofolio1,
    img: [react, tailwind],
    description: 'Website untuk memperkenalkan diri saya',
    linkDemo: 'https://radityaseptian.my.id/',
    linkRepo: 'https://github.com/radityaseptian/portofolio.v2',
  },
]

export default function ProjectSection() {
  return (
    <section className='py-12'>
      <HeaderSection title='Karya' description='Karya yang pernah saya buat' />
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {projects.map((item) => {
          return (
            <li
              key={item.name}
              className='rounded-xl overflow-hidden grayscale hover:grayscale-0 border'
            >
              <img src={item.img} alt={item.name} />
              <div className='p-2'>
                <div className='flex justify-between items-center'>
                  <h3 className='text-xl font-poppins font-semibold'>
                    {item.name}
                  </h3>
                  <div className='flex items-center gap-4'>
                    <BsCodeSlash />
                    <div className='flex items-center gap-1'>
                      <span>buka</span>
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
                <p>{item.description}</p>
                {/* <ul>
                  {item.stack.map((item, i) => {
                    console.log(item)
                    return (
                      <li key={i}>
                        <img src={item} />
                      </li>
                    )
                  })}
                </ul> */}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
