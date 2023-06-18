export default function NavItem({ name }) {
  return (
    <li>
      <a
        href={`#${name.toLowerCase()}`}
        className='text-black/70 target:text-black'
      >
        {name}
      </a>
    </li>
  )
}
