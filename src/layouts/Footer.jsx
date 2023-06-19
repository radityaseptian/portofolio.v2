import Container from '../components/Container'

import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const items = [
  'Beranda',
  '/',
  'Tentang',
  '/',
  'Kemampuan',
  '/',
  'Edukasi',
  '/',
  'Karya',
  '/',
  'Kontak',
  '/',
  'Blog',
]

export default function Footer() {
  return (
    <footer className='rounded-t-xl md:rounded-t-3xl bg-slate-100  pb-24 md:pb-12 pt-10'>
      <Container>
        <div className='flex flex-col items-center'>
          <h4 className='text-xl md:text-2xl font-bold'>Raditya</h4>
          <ul className='flex flex-wrap gap-4 md:gap-6 py-4'>
            {items.map((item) => {
              switch (item) {
                case '/':
                  return (
                    <li className='text-blue-500' key={item}>
                      {item}
                    </li>
                  )
                case 'Blog':
                  return (
                    <li key={item}>
                      <a
                        href='http://radwritter.vercel.app'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {item}
                      </a>
                    </li>
                  )
                default:
                  return (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`}>{item}</a>
                    </li>
                  )
              }
            })}
          </ul>
          <div className='flex gap-4 md:gap-6 pt-3'>
            <FaGithub className='w-7 h-7 md:h-5 md:w-5 box-content p-2 rounded-md bg-slate-400' />
            <FaFacebookF className='w-7 h-7 md:h-5 md:w-5 box-content p-2 rounded-md bg-slate-400' />
            <FaLinkedinIn className='w-7 h-7 md:h-5 md:w-5 box-content p-2 rounded-md bg-slate-400' />
          </div>
        </div>
      </Container>
    </footer>
  )
}
