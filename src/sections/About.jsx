import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'

export default function AboutSection() {
  return (
    <Section id='tentang'>
      <HeaderSection title='Tentang' description='Biarkan saya memperkenalkan diri' />
      <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10'>
        <img src='/profile.jpg' className='rounded-3xl w-60 md:w-auto md:max-w-sm' />
        <div className='flex-1'>
          <p>
            Halo, Nama saya Raditya M. Septian saya lahir pada tanggal 24 September 2005 (18 tahun). Saya seorang
            Pengembang Situs Website, saya tinggal di Bekasi, Indonesia.
            <br />
            <br />
            Saya memiliki ketertarikan untuk belajar Fullstack Pengembang Website, terutama yang berkaitan dengan
            Javascript. Saya cepat belajar dan otodidak. Saya telah belajar banyak teknologi yang berkaitan dengan
            Javascript dalam dua tahun terakhir dari internet.
          </p>
        </div>
      </div>
    </Section>
  )
}
