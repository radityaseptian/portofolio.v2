export default function Input({ type, name, nama }) {
  return (
    <div className='relative flex-1'>
      <span className='capitalize absolute p-1 text-slate-500 bg-slate-50 dark:bg-zinc-800 dark:text-white left-[.9rem] -top-4'>
        {nama}
      </span>
      <input
        name={name}
        type={type}
        placeholder={`Masukkan ${nama}`}
        className='p-4 border rounded-lg w-full bg-slate-50 dark:bg-zinc-800 outline-none custom-shadow'
      />
    </div>
  )
}
