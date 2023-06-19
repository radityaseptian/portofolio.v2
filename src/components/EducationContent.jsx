export default function EducationContent({ data = [] }) {
  return (
    <>
      {data.map((item) => {
        return (
          <div className='flex gap-3 h-10 bg-red-200'>
            <div className='bg-green-400'></div>
            <div className='w-[1.4px] bg-black relative'>
              <span className='w-4 h-4 absolute -left-2 bg-slate-900 rounded-full'></span>
            </div>
            <div className='bg-green-400'></div>
          </div>
        )
      })}
    </>
  )
}
