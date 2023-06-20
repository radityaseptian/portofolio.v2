export default function NavItem(props) {
  const { name, className } = props
  const target = `#${name.toLowerCase()}`
  return (
    <li {...props}>
      <a href={target} className={className}>
        {name}
      </a>
    </li>
  )
}
