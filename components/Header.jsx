'use client'
import React, { useState, useEffect } from "react"
import Image from 'next/image'
import Link from "next/link"

import Nav from "./Nav"
import NavMobile from "./NavMobile"


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
    <header 
      className={`py-2 lg:py-6 lg:pt-0 lg:pb-0 fixed top-0 w-full z-50 transition-all duration-200 xl:px-40 bg-black`}
    >
      <div className="mr-[30px] ml-[30px]">
        {/* logo, nav, btn  */}
        <div className="mx-auto flex items-center justify-between">
          {/* logo */}
          <div>
            <Link href='/'>
              <Image src='/logo-terra-pack.svg' width={391} height={109} alt="" className="hidden lg:block" />
              <Image src='/logo-terra-pack.svg' width={260} height={40} alt="" className="block lg:hidden" />
            </Link>
          </div>
          {/* nav  */}
          <Nav containerStyles='hidden lg:flex gap-x-9 xl:gap-x-14 text-black' linkStyles='capitalize text-white' />
          {/* mobile nav  */}
          <NavMobile containerStyles='lg:hidden' iconStyles='text-3xl' linkStyles='uppercase text-sm text-white' />
        </div>
      </div>
    </header>
  )
}

export default Header