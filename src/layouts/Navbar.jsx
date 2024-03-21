import { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import NavItem from '../components/NavItem'
import MobileNavModal from '../components/MobileNavModal'

export default function Navbar() {
  const [theme, setTheme] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [target, setTarget] = useState('#home')

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

  const navbarList = ['beranda', 'tentang', 'edukasi', 'kemampuan', 'karya', 'kontak']

  return (
    <nav>
      <div
        ref={navbar}
        className='fixed z-50 bottom-0 md:bottom-auto md:top-0 right-0 left-0 dark:text-white bg-white dark:bg-[#1d1d1d]'
      >
        <Container>
          <div className='flex justify-between flex-row-reverse md:flex-row py-3 md:py-4 lg:py-5'>
            <ul className='hidden md:flex items-center gap-7 font-rubik font-semibold'>
              {navbarList.map((name) => {
                const hash = `#${name}`
                return (
                  <NavItem
                    onClick={() => setTarget(hash)}
                    className={
                      target === hash
                        ? 'text-black dark:text-white'
                        : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                    }
                    key={name}
                    name={name}
                  />
                )
              })}
            </ul>
            <button
              onClick={() => setShowModal(!showModal)}
              className='md:hidden text-3xl font-semibold cursor-pointer bg-slate-100 border hover:bg-slate-200 dark:hover:bg-zinc-950 dark:border-zinc-600 dark:bg-[#141417] box-content py-[.1rem] px-[.4rem] rounded'
            >
              <span>☰</span>
            </button>
            {showModal && <MobileNavModal names={navbarList} />}
            <div className='flex items-center flex-row-reverse md:flex-row gap-2 md:gap-4'>
              <button onClick={() => setTheme(!theme)}>
                <span
                  className={`p-2.5 lg:p-2 border rounded-md ${
                    theme
                      ? 'bg-[#141417] hover:bg-zinc-950 border-zinc-600'
                      : 'bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  {!theme ? '🌞' : '🌚'}
                </span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  )
}
