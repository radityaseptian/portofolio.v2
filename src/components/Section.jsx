export default function Section({ children, id }) {
  return (
    <section id={id} className='py-8 md:pt-20 md:pb-12'>
      {children}
    </section>
  )
}
