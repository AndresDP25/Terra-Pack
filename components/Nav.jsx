import Link from "next/link"
import {Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'

const links = [
  {
    path: 'nosotros',
    name: 'Nosotros',
    offset: -49
  },
  {
    path: 'productos',
    name: 'Nuestros Productos',
    offset: -49
  },
  {
    path: 'cuidado',
    name: 'Medio Ambiente',
    offset: -39
  },
  {
    path: 'footer',
    name: 'Contacto',
    offset: -69
  },
]

const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles} items-center`}>
      {links.map((link, index) => {
        return link.customUrl ? (
          <Link target="black" href={link.customUrl} key={index}>
            {link.name}
          </Link>
        ) : ( 
          <ScrollLink 
            key={index} 
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className={`${linkStyles}`}
          >
              {link.name}
          </ScrollLink>
        )
      })}
    </nav>
  )
}

export default Nav