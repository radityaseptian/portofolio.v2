import Navbar from './Navbar'
import Container from '../components/Container'

import { TypeAnimation } from 'react-type-animation'

import { FiGithub, FiFacebook, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import { FaFileDownload } from 'react-icons/fa'
import { ImBlog } from 'react-icons/im'

export default function Header() {
  return (
    <header
      id='beranda'
      className='min-h-screen flex items-center'
    >
      <Navbar />
      <Container>
        <div className='relative mb-14 mt-4 md:m-0'>
          <div className='absolute flex flex-col gap-4 md:gap-6 top-12 sm:top-16'>
            <a
              href='http://github.com/radityaseptian'
              target='_blank'
              rel='noopener noreferrer'
              className='w-7 h-7'
            >
              <FiGithub className='w-7 h-7' />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100093066214468'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiFacebook className='w-7 h-7' />
            </a>
            <a
              href='https://www.linkedin.com/in/raditya-septian-3a9768277/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiLinkedin className='w-7 h-7' />
            </a>
          </div>
          <div className='flex justify-between gap-6 items-center md:ml-20 lg:ml-36 flex-col md:flex-row-reverse'>
            <img
              src='/profile.jpg'
              className='profile-animation w-52 bg-black/5 p-1 sm:w-64 ml-12 md:ml-0'
            />
            <div className='self-stretch md:self-center flex justify-center'>
              <div>
                <h1 className='text-5xl font-rubik font-extrabold leading-[3.2rem] text-[#333] dark:text-white'>
                  Raditya Septian
                </h1>
                <TypeAnimation
                  sequence={[
                    'Website Developer',
                    2000,
                    'Software Enthusiast',
                    2000,
                    'MERN Stack',
                    2000,
                  ]}
                  wrapper='div'
                  className='text-2xl font-poppins font-bold py-3 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-400'
                  speed={200}
                  repeat={Infinity}
                />
                <p className='pb-2'>
                  Halo semuanya 👋🏼, selamat datang di situs portofolio saya.
                </p>
                <div className='flex gap-2 flex-wrap py-2'>
                  <button>
                    <a
                      href='/resume.pdf'
                      download
                      className='flex items-center gap-2 rounded-lg px-4 py-2 bg-slate-100 dark:bg-zinc-900 dark:border-zinc-700 border'
                    >
                      <FaFileDownload className='w-4 h-4' />
                      <span className='font-poppins'>Unduh Resume</span>
                    </a>
                  </button>
                  <button>
                    <a
                      href='https://radwritter.vercel.app'
                      target='_blank'
                      rel='noopener noreferrer'
                      download
                      className='flex items-center gap-2 rounded-lg px-4 py-2 bg-slate-100 dark:bg-zinc-900 dark:border-zinc-700 border'
                    >
                      <ImBlog className='w-4 h-4' />
                      <span className='font-poppins'>Blog</span>
                      <FiArrowRight />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
