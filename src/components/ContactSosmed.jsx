export default function ContactSosmed({ name, username, icon: Icon, href }) {
  return (
    <div className='border flex flex-col items-center p-4 rounded-lg bg-white dark:bg-[#242424] dark:border-zinc-600'>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <Icon className='w-6 h-6 md:w-7 md:h-7' />
      </a>
      <p className='font-bold pt-2'>{name}</p>
      <div>{username}</div>
      <a href={href} target='_blank' className='flex items-center gap-1 hover:gap-2 pt-4'>
        <span>Hubungi</span>
        <span>&#11162;</span>
      </a>
    </div>
  )
}
