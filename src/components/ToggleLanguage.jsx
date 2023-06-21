import useLanguage from '../context/LanguageContext'

import en from '../assets/united.svg'
import id from '../assets/indonesia.svg'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md'
import { useState } from 'react'

export default function ToggleLanguage() {
  const [showDropDown, setShowDropDown] = useState(false)
  const { english, indonesia, language, setLanguage } = useLanguage()

  const handleChange = (lang) => {
    setShowDropDown(false)
    if (lang === language.country) {
      return
    }
    if (lang === 'id') {
      setLanguage(indonesia)
    } else {
      setLanguage(english)
    }
  }

  return (
    <>
      <div className='relative'>
        <div
          onClick={() => setShowDropDown(!showDropDown)}
          className='flex items-center gap-1 bg-slate-100 dark:bg-[#141417] dark:border-zinc-600 border rounded-md p-2 cursor-pointer'
        >
          <img
            src={language.country === 'en' ? en : id}
            alt='Language'
            className='w-7 h-5'
          />
          <span className='font-bold font-poppins'>
            {language.country === 'en' ? 'EN' : 'ID'}
          </span>
          <MdOutlineKeyboardArrowDown className='hidden md:block' />
          <MdOutlineKeyboardArrowUp className='md:hidden' />
        </div>
        {showDropDown && (
          <ul className='absolute z-50 bg-white dark:bg-[#141417] rounded-md -top-28 md:top-auto md:-left-[4.2rem] md:-bottom-28 w-40 p-2 space-y-1'>
            <li onClick={() => handleChange('en')}>
              <div className='flex items-center gap-1 p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-md cursor-pointer'>
                <img src={en} alt='Language' className='w-7 h-5' />
                <span className='font-poppins'>ENGLISH</span>
              </div>
            </li>
            <li onClick={() => handleChange('id')}>
              <div className='flex items-center gap-1 p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-md cursor-pointer'>
                <img src={id} alt='Language' className='w-7 h-5' />
                <span className='font-poppins'>INDONESIA</span>
              </div>
            </li>
          </ul>
        )}
      </div>
    </>
  )
}
