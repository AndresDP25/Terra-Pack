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
    path: "combos",
    name: "combos",
    offset: -80,
  },
  {
    path: "internet",
    name: "internet",
    offset: -80,
  },
  {
    path: "television",
    name: "televisión",
    offset: -80,
  },
  {
    path: "empresas",
    name: "empresas",
    offset: -80,
  },
  {
    path: "legales",
    name: "legales",
    customUrl: '/legales',
  },
  {
    icon: <FaUsers />,
    path: "contacto",
    name: "contacto",
    offset: -80,
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
        bg-text fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500 h-screen`}
      >
        <div className="flex flex-col items-center justify-between h-full">
          {/* nav close btn  */}
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 flex items-end justify-center"
          >
            <IoCloseOutline style={{ color: "#8944DF" }} />
          </div>
          {/* logo  */}
          <Link href="/">
            <Image src="/logo2.png" width={160} height={70} alt="" />
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
            <div >
              <Link href="http://200.55.246.250:5594/Autogestion/" target="blanck">
                <div className="flex gap-x-6 items-center">
                  <Image src="/nav/icono_user_mobile.svg" width={30} height={30} alt="" />
                  <div className="uppercase text-sm text-botons">acceso</div>
                </div>
              </Link>
            </div>
          </div>
          {/* btn */}
          <div className="flex gap-[20px] text-white justify-center">
              <Link href="https://www.instagram.com/gmxargentina/" target="blanck">
                <Image src="/nav/ig_mobile.svg" width={37} height={37} alt="" />
              </Link>
              <Link href="https://ar.linkedin.com/in/gmx-argentina-internet-por-fibra-optica-2ab41029b" target="blanck">
                <Image src="/nav/linkedin_mobile.svg" width={37} height={37} alt="" />
              </Link>
              <Link href="mailito:ventas@gmxargentina.com.ar" target="blanck">
                <Image src="/nav/mail_mobile.svg" width={37} height={37} alt="" />
              </Link>
            </div>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
