import { createContext, useContext, useState } from 'react'
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { FaGraduationCap } from 'react-icons/fa'
import { MdOutlineContacts } from 'react-icons/md'

import blogImg from '../assets/demo/blog.png'
import shiganimeImg from '../assets/demo/shiganime.png'
import zeitplanImg from '../assets/demo/zeitplan.png'
import portofolio1Img from '../assets/demo/portofolio.v1.png'
import portofolio2Img from '../assets/demo/portofolio.v2.png'

import tailwind from '../assets/skills/tailwind.svg'
import react from '../assets/skills/react.svg'
import node from '../assets/skills/nodejs.png'
import express from '../assets/skills/express.svg'
import mongo from '../assets/skills/mongo.svg'

// ==== Projects Default Same Value
const blog = {
  img: blogImg,
  linkDemo: 'https://radwritter.vercel.app/',
  linkRepo: 'https://github.com/radityaseptian/blog',
  stack: [
    {
      name: 'React.JS',
      icon: react,
    },
    {
      name: 'Tailwind.CSS',
      icon: tailwind,
    },
    {
      name: 'Node.JS',
      icon: node,
    },
    {
      name: 'Express.JS',
      icon: express,
    },
    {
      name: 'MongoDB',
      icon: mongo,
    },
  ],
}
const shiganime = {
  img: shiganimeImg,
  linkDemo: 'https://shiganime-en.vercel.app/',
  linkRepo: 'https://github.com/radityaseptian/shiganime',
  stack: [
    {
      name: 'React.JS',
      icon: react,
    },
    {
      name: 'Tailwind.CSS',
      icon: tailwind,
    },
  ],
}
const zeitplan = {
  img: zeitplanImg,
  linkDemo: 'https://zeitplan-rho.vercel.app/',
  linkRepo: 'https://github.com/radityaseptian/landing-page',
  stack: [
    {
      name: 'React.JS',
      icon: react,
    },
    {
      name: 'Tailwind.CSS',
      icon: tailwind,
    },
  ],
}
const portfolio1 = {
  img: portofolio1Img,
  linkDemo: 'https://radityaseptian.vercel.app/',
  linkRepo: 'https://github.com/radityaseptian/portofolio',
  stack: [
    {
      name: 'React.JS',
      icon: react,
    },
    {
      name: 'Tailwind.CSS',
      icon: tailwind,
    },
  ],
}
const portfolio2 = {
  img: portofolio2Img,
  linkDemo: 'https://radityaseptian.my.id/',
  linkRepo: 'https://github.com/radityaseptian/portofolio.v2',
  stack: [
    {
      name: 'React.JS',
      icon: react,
    },
    {
      name: 'Tailwind.CSS',
      icon: tailwind,
    },
  ],
}

// ==== Language
const english = {
  country: 'en',
  header: {
    navbar: [
      {
        name: 'home',
        icon: AiOutlineHome,
      },
      {
        name: 'about',
        icon: AiOutlineUser,
      },
      {
        name: 'education',
        icon: FaGraduationCap,
      },
      {
        name: 'skills',
        icon: SiJavascript,
      },
      {
        name: 'works',
        icon: AiOutlineFundProjectionScreen,
      },
      {
        name: 'contact',
        icon: MdOutlineContacts,
      },
    ],
    headParagraf: 'Hi everyone 👋🏼, welcome to my portfolio website.',
    buttonDownload: 'Download Resume',
    buttonBlog: 'Blogs',
  },
  about: {
    title: 'About',
    description: 'Let me introduce myself',
    paragraf1:
      'Hello, My name is Raditya M. Septian. I am a Website Developer, I live in Bekasi, Indonesia. I was born in Karawang on September 24 2005 (17 years).',
    paragraf2:
      "I have an interest in learning Fullstack Website Developer, especially related to Javascript. I am fast learner and self taught. I've learned a lot of technology related to Javascript in the past year from the internet.",
  },
  education: {
    title: 'Education',
    description: 'My journey',
    formal: [
      {
        title: 'SMK Sandikta',
        date: '2020 - 2023',
        description: 'Computer and Network Engineering',
      },
      {
        title: 'Rezcom System',
        date: '2022',
        description: 'Internship / street vendors to become IT Support',
      },
    ],
    nonFormal: [
      {
        title: 'Backend Developer',
        date: '2023 - Now',
        description:
          'Node.JS, Express.JS, Basic auth, JWT, Routing, Middleware, Upload file',
      },
      {
        title: 'Database',
        date: '2023 - Now',
        description:
          'MongoDB, Search data, create data, edit data, delete data, search data based on regex',
      },
      {
        title: 'Frontend Framework / Library',
        date: '2022 - Now',
        description:
          'Tailwind.CSS, React.JS, React.JS Hooks, React.JS Routing, Next.JS',
      },
      {
        title: 'Javascript',
        date: '2022',
        description:
          'Basic, Data type, For loop, Conditioning, Function, DOM, ES6, Promise, Async/Await',
      },
      {
        title: 'HTML - CSS',
        date: '2022',
        description:
          'How to make tag, Semantic element, Nested, Attribut, Link, HTML5, CSS Basic, Layouting, Flexbox, Grid, Transition',
      },
    ],
  },
  skills: {
    title: 'Skills',
    description: 'All my abilities so far',
    tab: ['Language', 'Framework/Library', 'Databases', 'Tools'],
  },
  projects: {
    title: 'Works',
    description: "Work I've ever done",
    works: [
      {
        name: 'Personal Blogs',
        description:
          'A personal blog website for writing and sharing topics around technology',
        ...blog,
      },
      {
        name: 'Shiganime - Streaming Anime',
        description: 'Website for watching anime online with English subtitles',
        ...shiganime,
      },
      {
        name: 'The Zeitplan',
        description: 'Slicing design figma into a website',
        ...zeitplan,
      },
      {
        name: 'Portfolio Website V1',
        description: 'Website to introduce myself',
        ...portfolio1,
      },
      {
        name: 'Portfolio Website V2',
        description: 'Website to introduce myself',
        ...portfolio2,
      },
    ],
  },
  contact: {
    title: 'Contact',
    description: 'Send message for me',
    cardContact: 'Contact',
    buttonSend: ['Send', 'Wait'],
    info: {
      success: 'Successfully sent!',
      error: 'Failed to send!',
      warning: 'Please enter correctly!',
    },
    input: [
      {
        span: 'Name',
        placeholder: 'Enter a name',
      },
      {
        span: 'Email',
        placeholder: 'Enter a email',
      },
      {
        span: 'Message',
        placeholder: 'Write your message',
      },
    ],
  },
  footer: [
    'home',
    '/',
    'about',
    '/',
    'skills',
    '/',
    'education',
    '/',
    'works',
    '/',
    'contact',
    '/',
    'blogs',
  ],
}

const indonesia = {
  country: 'id',
  header: {
    navbar: [
      {
        name: 'beranda',
        icon: AiOutlineHome,
      },
      {
        name: 'tentang',
        icon: AiOutlineUser,
      },
      {
        name: 'edukasi',
        icon: FaGraduationCap,
      },
      {
        name: 'kemampuan',
        icon: SiJavascript,
      },
      {
        name: 'karya',
        icon: AiOutlineFundProjectionScreen,
      },
      {
        name: 'kontak',
        icon: MdOutlineContacts,
      },
    ],
    headParagraf: 'Halo semuanya 👋🏼, selamat datang di situs portofolio saya.',
    buttonDownload: 'Unduh Resume',
    buttonBlog: 'Blog',
  },
  about: {
    title: 'Tentang',
    description: 'Biarkan saya memperkenalkan diri',
    paragraf1:
      'Halo, Nama saya Raditya M. Septian. Saya seorang Pengembang Situs Website, saya tinggal di Bekasi, Indonesia. Saya lahir di Karawang pada tanggal 24 September 2005 (17 tahun).',
    paragraf2:
      'Saya memiliki ketertarikan untuk belajar Fullstack Pengembang Website, terutama yang berkaitan dengan Javascript. Saya cepat belajar dan otodidak. Saya telah belajar banyak teknologi yang berkaitan dengan Javascript dalam satu tahun terakhir dari internet.',
  },
  education: {
    title: 'Edukasi',
    description: 'Perjalanan saya',
    formal: [
      {
        title: 'SMK Sandikta',
        date: '2020 - 2023',
        description: 'Teknik Komputer dan Jaringan',
      },
      {
        title: 'Rezcom System',
        date: '2022',
        description: 'Magang / PKL menjadi IT Support',
      },
    ],
    nonFormal: [
      {
        title: 'Backend Developer',
        date: '2023 - Sekarang',
        description:
          'Node.JS, Express.JS, Basic auth, JWT, Routing, Middleware, Upload file',
      },
      {
        title: 'Database',
        date: '2023 - Sekarang',
        description:
          'MongoDB, Mencari data, membuat data, mengedit data, menghapus data, mencari data berdasarkan regex',
      },
      {
        title: 'Frontend Framework / Library',
        date: '2022 - Sekarang',
        description:
          'Tailwind.CSS, React.JS, React.JS Hooks, React.JS Routing,  Next.JS',
      },
      {
        title: 'Javascript',
        date: '2022',
        description:
          'Dasar, Tipe data, Perulangan, Perkondisian, Function, DOM, ES6, Promise, Async/Await',
      },
      {
        title: 'HTML - CSS',
        date: '2022',
        description:
          'Cara membuat tag, Semantic element, Nested, Attribut, Link, HTML5, CSS dasar, Layouting, Flexbox, Grid, Transition',
      },
    ],
  },
  skills: {
    title: 'Kemampuan',
    description: 'Semua kemampuan saya sejauh ini',
    tab: ['Bahasa', 'Kerangka/Pusataka', 'Database', 'Alat'],
  },
  projects: {
    title: 'Karya',
    description: 'Karya yang pernah saya buat',
    works: [
      {
        name: 'Blog Pribadi',
        description:
          'Website blog pribadi untuk menulis dan membagikan topik seputar teknologi',
        ...blog,
      },
      {
        name: 'Shiganime - Streaming Anime',
        description:
          'Website untuk menonton anime secara online ber-subtitle Inggris',
        ...shiganime,
      },
      {
        name: 'The Zeitplan',
        description: 'Slicing design figma menjadi website',
        ...zeitplan,
      },
      {
        name: 'Portofolio Website V1',
        description: 'Website untuk memperkenalkan diri saya',
        ...portfolio1,
      },
      {
        name: 'Portofolio Website V2',
        description: 'Website untuk memperkenalkan diri saya',
        ...portfolio2,
      },
    ],
  },
  contact: {
    title: 'Kontak',
    description: 'Kirim pesan kepada saya',
    cardContact: 'Hubungi',
    buttonSend: ['Kirim', 'Tunggu'],
    info: {
      success: 'Berhasil mengirim!',
      error: 'Gagal mengirim!',
      warning: 'Tolong masukkan dengan benar!',
    },
    input: [
      {
        span: 'Nama',
        placeholder: 'Masukkan nama',
      },
      {
        span: 'Email',
        placeholder: 'Masukkan email',
      },
      {
        span: 'Pesan',
        placeholder: 'Tuliskan pesan anda',
      },
    ],
  },
  footer: [
    'beranda',
    '/',
    'tentang',
    '/',
    'kemampuan',
    '/',
    'edukasi',
    '/',
    'karya',
    '/',
    'kontak',
    '/',
    'blog',
  ],
}

const Context = createContext({})

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(english)

  const value = {
    english,
    indonesia,
    language,
    setLanguage,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default function useLanguage() {
  return useContext(Context)
}
