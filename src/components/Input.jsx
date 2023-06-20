export default function Input({ type, name, nama }) {
  return (
    <div className='relative flex-1'>
      <span className='capitalize absolute px-1 py-0 text-slate-500 bg-white dark:bg-[#242424] dark:text-slate-100 left-[.9rem] -top-3'>
        {nama}
      </span>
      <input
        name={name}
        type={type}
        placeholder={`Masukkan ${nama}`}
        className='p-4 border rounded-lg w-full bg-white dark:bg-[#242424] dark:border-zinc-600 outline-none custom-shadow'
      />
    </div>
  )
}
