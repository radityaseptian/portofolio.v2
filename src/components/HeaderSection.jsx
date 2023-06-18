export default function HeaderSection({ title, description }) {
  return (
    <center className='pb-16'>
      <h2 className='text-3xl font-poppins font-bold py-4'>{title}</h2>
      <p>{description}</p>
    </center>
  )
}
