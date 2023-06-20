export default function Skill({ list = [] }) {
  return (
    <ul className='flex gap-4 py-4 flex-wrap text-center'>
      {list.map((item) => {
        return (
          <li
            key={item.name}
            title={item.name}
            className='p-4 w-32 h-32 md:w-40 md:h-40 bg-slate-100 hover:bg-slate-200 dark:bg-[#242424] dark:hover:bg-zinc-900 dark:border-zinc-700 rounded-lg border-2'
          >
            <img
              loading='lazy'
              src={item.img}
              alt={item.name}
              className={`${
                item.name === 'Next.JS' && 'dark:bg-white rounded-full'
              } w-16 h-16 md:w-24 md:h-24 mb-2 mx-auto`}
            />
            <span className='font-bold'>{item.name}</span>
          </li>
        )
      })}
    </ul>
  )
}
