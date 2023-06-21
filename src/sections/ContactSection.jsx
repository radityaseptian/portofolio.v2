import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import ContactSosmed from '../components/ContactSosmed'
import Input from '../components/Input'
import useLanguage from '../context/LanguageContext'

import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'

import { useState } from 'react'

export default function ContactSection() {
  const { language } = useLanguage()
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

    if (
      name.value.length >= 3 &&
      email.value.length >= 5 &&
      textarea.value.length >= 3
    ) {
      const formData = new FormData()
      formData.append('name', name.value)
      formData.append('email', email.value)
      formData.append('message', textarea.value)
      fetch(url, {
        method: 'POST',
        body: formData,
      })
        .then((res) => {
          if (res.ok || res.status == 200) {
            setInfo(success)
            e.target.reset()
          } else {
            setInfo(error)
          }
        })
        .finally(() => setWait(false))
    } else {
      setInfo(warning)
      setWait(false)
    }
  }

  // ==== Language
  const id = language?.header?.navbar[5].name
  const title = language?.contact?.title
  const description = language?.contact?.description
  const cardContact = language?.contact?.cardContact
  const [sendName, waitName] = language?.contact?.buttonSend
  const { success, error, warning } = language?.contact?.info
  // == Span && Placeholder
  const text = language?.contact?.input[0]
  const email = language?.contact?.input[1]
  const textarea = language?.contact?.input[2]

  return (
    <Section id={id}>
      <HeaderSection title={title} description={description} />
      <div className='flex gap-8 flex-col-reverse md:flex-row'>
        <div className='space-y-2 md:space-y-4'>
          <ContactSosmed
            icon={AiOutlineMail}
            cardContact={cardContact}
            name='Email'
            username='radityaseptian1551@gmail.com'
            href='mailto:radityaseptian1551@gmail.com'
          />
          <ContactSosmed
            icon={AiOutlineLinkedin}
            cardContact={cardContact}
            name='Linkedin'
            username='@raditya-septian-3a9768277'
            href='https://www.linkedin.com/in/raditya-septian-3a9768277/'
          />
        </div>
        <form onSubmit={sendMessage} className='flex-1 space-y-8'>
          <div className='flex flex-col md:flex-row gap-8'>
            <Input
              nama={text.span}
              placeholder={text.placeholder}
              type='text'
              name='name'
            />
            <Input
              nama={email.span}
              placeholder={email.placeholder}
              type='email'
              name='email'
            />
          </div>
          <div className='relative'>
            <span className='capitalize absolute px-1 py-0 z-10 text-slate-500 bg-white dark:bg-[#242424] dark:text-slate-100 left-[.9rem] -top-3'>
              {textarea.span}
            </span>
            <textarea
              name='message'
              type='text'
              placeholder={textarea.placeholder}
              rows={5}
              className='relative outline-none bg-white dark:bg-[#242424] p-4 border dark:border-zinc-600 rounded-lg w-full custom-shadow'
            />
          </div>
          <div className='flex gap-4 items-center flex-wrap'>
            <button
              type={!wait ? 'submit' : undefined}
              className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md'
            >
              <span className='font-bold'>{!wait ? sendName : waitName}</span>
              <RiSendPlane2Line />
            </button>
            <span>{info}</span>
          </div>
        </form>
      </div>
    </Section>
  )
}
