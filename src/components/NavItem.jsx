export default function NavItem({ name }) {
  return (
    <li>
      <a href={`#${name.toLowerCase()}`}>{name}</a>
    </li>
  )
}
