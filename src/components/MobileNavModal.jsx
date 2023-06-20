export default function MobileNavModal({ item = [] }) {
  return (
    <div className='md:hidden fixed bg-white dark:bg-[#1d1d1d] bottom-14 pb-10 pt-4 left-0 right-0 rounded-t-xl shadow-navModal'>
      <ul className='grid grid-cols-3 gap-8 px-5'>
        {item.map(({ name, icon: Icon }) => {
          return (
            <a href={`#${name.toLowerCase()}`}>
              <li key={name} className='flex items-center flex-col'>
                <Icon className='w-6 h-6' />
                <span>{name}</span>
              </li>
            </a>
          )
        })}
      </ul>
    </div>
  )
}
