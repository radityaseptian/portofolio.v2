import { useState } from 'react'
import Container from '../components/Container'
import NavItem from '../components/NavItem'
import MobileNavModal from '../components/MobileNavModal'

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { BsCloudSunFill, BsMoonStarsFill, BsFillGridFill } from 'react-icons/bs'
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

  return (
    <nav>
      <div className='fixed z-50 bottom-0 md:bottom-auto md:top-0 right-0 left-0 bg-red-50'>
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
                theme ? 'bg-white/20 justify-end' : 'bg-black/20 justify-start'
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
  )
}
