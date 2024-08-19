'use client'
import React, { useState, useEffect } from "react"
import Image from 'next/image'
import Link from "next/link"

import Nav from "./NavLegales"
import NavMobile from "./NavMobileLegales"


const Header = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100)
    }

    // add event listener
    window.addEventListener('scroll', handleScroll)

    // clear event listener
    return() => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={'py-6 lg:pt-3 lg:pb-4 fixed top-0 bg-green w-full z-50 transition-all duration-200 xl:px-40'}
    >
      <div className="mx-auto">
        {/* logo, nav, btn  */}
        <div className="flex container items-center justify-between">
          {/* logo */}
          <div>
            <Link href='/'>
              <Image src='/logo.svg' width={131} height={54} alt="" className="hidden lg:block" />
              <Image src='/logo.svg' width={96} height={40} alt="" className="block lg:hidden" />
            </Link>
          </div>
          {/* nav  */}
          <Nav />
          {/* mobile nav  */}
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header