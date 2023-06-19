import HeaderSection from '../components/HeaderSection'
import ContactSosmed from '../components/ContactSosmed'
import Input from '../components/Input'

import {
  AiOutlineMail,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'

export default function ContactSection() {
  const sendMessage = (e) => {
    e.preventDefault()
  }

  return (
    <section id='kontak' className='py-16'>
      <HeaderSection title='Kontak' description='Kirim pesan kepada saya' />
      <div className='flex gap-8 flex-col-reverse md:flex-row'>
        <div className='space-y-2 md:space-y-4'>
          <ContactSosmed
            icon={AiOutlineMail}
            name='Email'
            username='radityaseptian1551@gmail.com'
            href='mailto:radityaseptian1551@gmail.com'
          />
          <ContactSosmed
            icon={AiOutlineLinkedin}
            name='Linkedin'
            username='@raditya-septian-3a9768277'
            href='https://www.linkedin.com/in/raditya-septian-3a9768277/'
          />
        </div>
        <form onSubmit={sendMessage} className='flex-1 space-y-8'>
          <div className='flex flex-col md:flex-row gap-8'>
            <Input nama='nama' type='text' name='name' />
            <Input nama='email' type='email' name='email' />
          </div>
          <div className='relative'>
            <span className='capitalize absolute p-1 z-10 text-slate-500 bg-white left-[.9rem] -top-4'>
              Pesan
            </span>
            <textarea
              name='message'
              type='text'
              placeholder='Tuliskan pesan anda'
              rows={5}
              className='relative outline-none p-4 border rounded-lg w-full custom-shadow'
            />
          </div>
          <button
            type='submit'
            className='flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md'
          >
            <span className='font-bold'>Kirim</span>
            <RiSendPlane2Line />
          </button>
        </form>
      </div>
    </section>
  )
}
