"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";


const links = [
  {
    path: 'nosotros',
    name: 'Nosotros',
    offset: -80,
  },
  {
    path: 'productos',
    name: 'Nuestros Productos',
    offset: -80,
  },
  {
    path: 'cuidado',
    name: 'Medio Ambiente',
    offset: -80,
  },
  {
    path: 'footer',
    name: 'Contacto',
    offset: -69
  },
];

const NavMobile = ({ containerStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${containerStyles}`}>
      {/* nav trigger btn  */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer outline-none"
      >
        <GiHamburgerMenu className="w-10 h-10 text-white transition-all duration-200" />
      </div>
      <aside
        className={`${isOpen ? "right-0" : "-right-full"}
        bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500 h-screen`}
      >
        <div className="flex flex-col items-center justify-around h-full">
          {/* nav close btn  */}
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 flex items-end justify-center"
          >
            <IoCloseOutline style={{ color: "white" }} />
          </div>
          {/* logo  */}
          <Link href="/">
            <Image src="/logo-terra-pack.svg" width={257} height={79} alt="" />
          </Link>
          {/* links  */}
          <div className="flex flex-col gap-y-12">
            {links.map((link, index) => {
              return link.customUrl ? (
                <Link className={`${linkStyles} text-end`} target="black" href={link.customUrl} key={index}>
                  {link.name}
                </Link>
              ) : (
                <ScrollLink
                  key={index}
                  to={link.path}
                  offset={link.offset}
                  smooth={false}
                  className="text-end"
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`${linkStyles}`}>{link.name}</div>
                </ScrollLink>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
