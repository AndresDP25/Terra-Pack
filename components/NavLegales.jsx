import Link from "next/link"
import {Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'

const links = [
  {
    path: 'combos',
    name: 'Combos',
    customUrl: '/',
  },
  {
    path: 'internet',
    name: 'Internet',
    customUrl: '/',
  },
  {
    path: 'television',
    name: 'Televisión',
    customUrl: '/',
  },
  {
    path: 'empresas',
    name: 'Empresas',
    customUrl: '/',
  },
  {
    path: 'legales',
    name: 'Legales',
    customUrl: '/legales',
  },
  {
    path: 'contacto',
    name: 'Contacto',
  },
]

const Nav = () => {
  return (
    <nav className='hidden lg:flex gap-x-9 xl:gap-x-14 text-white items-center'>
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
            className={'capitalize'}
          >
              {link.name}
          </ScrollLink>
        )
      })}
      {/* user-icon  */}
      <Link href='http://200.55.246.250:5594/Autogestion/' target="blanck">
        <Image src='/nav/icono_user.svg' width={30} height={30} alt=""/>
      </Link>
    </nav>
  )
}

export default Nav