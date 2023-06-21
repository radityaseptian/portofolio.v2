export default function NavItem(props) {
  const { name, className } = props
  const target = `#${name}`
  return (
    <li {...props}>
      <a href={target} className={`${className} capitalize`}>
        {name}
      </a>
    </li>
  )
}
