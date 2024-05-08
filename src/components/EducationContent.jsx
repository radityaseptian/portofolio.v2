export default function EducationContent({ data = [] }) {
  return (
    <>
      {data.map((item, i) => {
        if (i % 2 == 0) {
          return (
            <div key={item.title} className='flex gap-3 md:gap-5 text-right'>
              <div className='flex-1 pb-6'>
                <h3 className='font-bold'>{item.title}</h3>
                <div className='pb-2 pt-3'>{item.date}</div>
                <p className='md:pl-28 text-zinc-800 dark:text-slate-100'>{item.description}</p>
              </div>
              <div className='w-[1.4px] bg-black dark:bg-white relative'>
                <span className='w-4 h-4 absolute -left-2 bg-black dark:bg-white rounded-full'></span>
              </div>
              <div className='flex-1'></div>
            </div>
          )
        }
        return (
          <div key={item.title} className='flex gap-3 md:gap-5'>
            <div className='flex-1'></div>
            <div className='w-[1.4px] bg-black dark:bg-white relative'>
              <span className='w-4 h-4 absolute -left-2 bg-black dark:bg-white rounded-full'></span>
            </div>
            <div className='flex-1 pb-6'>
              <h3 className='font-bold'>{item.title}</h3>
              <div className='pb-2 pt-3'>{item.date}</div>
              <p className='md:pr-28 text-zinc-800 dark:text-slate-100'>{item.description}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}
