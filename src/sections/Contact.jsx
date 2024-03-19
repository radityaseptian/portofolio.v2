import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import ContactSosmed from '../components/ContactSosmed'
import Input from '../components/Input'

import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

import { useState } from 'react'

export default function ContactSection() {
  const [wait, setWait] = useState(false)
  const [info, setInfo] = useState('')

  // endpoint getform.io, replace to your endpoint
  const url = 'https://getform.io/f/e8958e2d-450d-4dd5-8d4d-e67dbdd18110'
  const sendMessage = (e) => {
    e.preventDefault()
    setWait(true)
    setInfo('')

    const form = e.target
    const [name, email] = form.getElementsByTagName('input')
    const textarea = form.getElementsByTagName('textarea')[0]

    if (name.value.length >= 3 && email.value.length >= 5 && textarea.value.length >= 3) {
      const formData = new FormData()
      formData.append('name', name.value)
      formData.append('email', email.value)
      formData.append('message', textarea.value)
      fetch(url, { method: 'POST', body: formData })
        .then((res) => {
          if (res.ok || res.status === 200) {
            setInfo('Berhasil mengirim!')
            e.target.reset()
          } else {
            setInfo('Gagal mengirim!')
          }
        })
        .finally(() => setWait(false))
    } else {
      setInfo('Tolong masukkan dengan benar!')
      setWait(false)
    }
  }

  return (
    <Section id='kontak'>
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
            icon={FaLinkedinIn}
            name='Linkedin'
            username='@raditya-septian-3a9768277'
            href='https://www.linkedin.com/in/raditya-septian-3a9768277/'
          />
        </div>
        <form onSubmit={sendMessage} className='flex-1 space-y-8'>
          <div className='flex flex-col md:flex-row gap-8'>
            <Input nama='Nama' placeholder='Masukkan nama' type='text' name='name' />
            <Input nama='Email' placeholder='Masukkan email' type='email' name='email' />
          </div>
          <div className='relative'>
            <span className='capitalize absolute px-1 py-0 z-10 text-slate-500 bg-white dark:bg-[#242424] dark:text-slate-100 left-[.9rem] -top-3'>
              Pesan
            </span>
            <textarea
              name='message'
              type='text'
              placeholder='Tuliskan pesan'
              rows={5}
              className='relative outline-none bg-white dark:bg-[#242424] p-4 border dark:border-zinc-600 rounded-lg w-full custom-shadow'
            />
          </div>
          <div className='flex gap-4 items-center flex-wrap'>
            <button
              type={!wait ? 'submit' : 'button'}
              className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md'
            >
              <span className='font-bold'>{!wait ? 'Kirim' : 'Tunggu'}</span>
              <span>&#11162;</span>
            </button>
            <span>{info}</span>
          </div>
        </form>
      </div>
    </Section>
  )
}
