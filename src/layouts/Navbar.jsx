import { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import NavItem from '../components/NavItem'
import MobileNavModal from '../components/MobileNavModal'

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import {
  BsCloudSunFill,
  BsMoonStarsFill,
  BsFillGridFill,
  BsArrowUp,
} from 'react-icons/bs'
import { GrSend } from 'react-icons/gr'
import { FaGraduationCap } from 'react-icons/fa'

const navList = [
  {
    name: 'Beranda',
    icon: AiOutlineHome,
  },
  {
    name: 'Tentang',
    icon: AiOutlineUser,
  },
  {
    name: 'Edukasi',
    icon: FaGraduationCap,
  },
  {
    name: 'Kemampuan',
    icon: SiJavascript,
  },
  {
    name: 'Karya',
    icon: AiOutlineFundProjectionScreen,
  },
  {
    name: 'Kontak',
    icon: GrSend,
  },
]

export default function Navbar() {
  const [theme, setTheme] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const html = document.documentElement
  const navbar = useRef(null)

  useEffect(() => {
    if (theme) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const scrollHandle = () => {
      if (html.scrollTop > 1) {
        navbar.current.style.boxShadow = '0 1px 2px rgba(0,0,0,.2)'
      } else {
        navbar.current.style.boxShadow = '0 0 0 rgb(0,0,0,0)'
      }
    }
    window.addEventListener('scroll', scrollHandle)
    return () => window.removeEventListener('scroll', scrollHandle)
  }, [])

  const backToTop = () => {
    html.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav>
        <div
          ref={navbar}
          className='fixed z-50 bottom-0 md:bottom-auto md:top-0 right-0 left-0 dark:text-white bg-white dark:bg-[#1d1d1d]'
        >
          <Container>
            <div className='flex justify-between flex-row-reverse md:flex-row py-3 md:py-4 lg:py-6'>
              <ul className='hidden md:flex items-center gap-7 font-rubik font-semibold'>
                {navList.map(({ name }) => {
                  return <NavItem key={name} name={name} />
                })}
              </ul>
              <BsFillGridFill
                onClick={() => setShowModal(!showModal)}
                className='md:hidden cursor-pointer bg-slate-500 text-white w-7 h-7 box-content p-[.20rem] rounded'
              />
              {showModal && <MobileNavModal item={navList} />}
              <div
                onClick={() => setTheme(!theme)}
                className={`${
                  theme
                    ? 'bg-blue-500 justify-end'
                    : 'bg-black/20 justify-start'
                } w-14 rounded-full p-1 flex cursor-pointer self-center`}
              >
                {theme ? (
                  <BsMoonStarsFill className='w-4 h-4 p-[.10rem] box-content bg-white rounded-full text-slate-500' />
                ) : (
                  <BsCloudSunFill className='w-4 h-4 p-[.10rem] box-content bg-white rounded-full text-yellow-500' />
                )}
              </div>
            </div>
          </Container>
        </div>
      </nav>
      <BsArrowUp
        onClick={backToTop}
        className='fixed w-6 h-6 rounded-full cursor-pointer bottom-20 right-5 z-50 md:bottom-10 md:right-10 bg-blue-50 hover:bg-blue-200 dark:bg-zinc-700 dark:hover:bg-zinc-800 dark:border-zinc-500 border box-content p-2 md:p-3'
      />
    </>
  )
}
