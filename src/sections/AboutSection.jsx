import HeaderSection from '../components/HeaderSection'
import Container from '../components/Container'

export default function AboutSection() {
  return (
    <section className='py-12'>
      <HeaderSection
        title='Tentang'
        description='Biarkan saya memperkenalkan diri'
      />
      <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10'>
        <img
          src='/profile.jpg'
          className='rounded-3xl w-60 md:w-auto md:max-w-sm'
        />
        <div className='flex-1'>
          <p>
            Halo, Nama saya Raditya M. Septian. Saya seorang Pengembang Situs
            Website, saya tinggal di Bekasi, Indonesia. Saya lahir di Karawang
            pada tanggal 24 September 2005 (17 tahun).
            <br />
            <br />
            Saya memiliki ketertarikan untuk belajar Fullstack Pengembang
            Website, terutama yang berkaitan dengan Javascript. Saya cepat
            belajar dan otodidak. Saya telah belajar banyak teknologi yang
            berkaitan dengan Javascript dalam satu tahun terakhir dari internet.
          </p>
        </div>
      </div>
    </section>
  )
}
