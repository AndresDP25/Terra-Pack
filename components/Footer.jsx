"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green text-white pt-[20px] pb-[25px] xl:px-40" id="footer">
      <div className="container flex justify-between items-center">
        <div className="hidden lg:block"></div>
        <div>
          <h2 className="capitalize text-[12px] md:text-[16px] xl:text-[22px] pl-0 lg:pl-20">diseño | Terra Pack</h2>
        </div>
        <div className="flex gap-[20px]">
          <Link href="#" target="blanck">
            <Image src="/footer/instagram.png" width={28} height={28} alt="" />
          </Link>
          <Link href="#" target="blanck">
            <Image src="/footer/linkedin.png" width={28} height={28} alt="" />
          </Link>
          <Link href="#" target="blanck">
            <Image src="/footer/mail.png" width={28} height={28} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
