"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-[30px] pb-[30px] xl:px-40" id="footer">
      <div className="container flex">
        <div className="w-[50%] flex flex-col gap-4">
          <div>
            <Image src="/footer/logo-footer.png" width={214} height={141} alt="" />
          </div>
          <div className="flex gap-4 ml-8">
            <Link href="#" target="blanck">
              <Image src="/footer/twitter.png" width={24} height={24} alt="" />
            </Link>
            <Link href="#" target="blanck">
              <Image src="/footer/ig.png" width={24} height={24} alt="" />
            </Link>
            <Link href="#" target="blanck">
              <Image src="/footer/YouTube.png" width={24} height={24} alt="" />
            </Link>
            <Link href="#" target="blanck">
              <Image src="/footer/LinkedIn.png" width={24} height={24} alt="" />
            </Link>
          </div>
        </div>
        <div className="flex w-[50%] gap-[218px]">
          <div className="flex flex-col gap-[35px]">
            <h3 className="font-semibold text-[22px]">Explore</h3>
            <ul className="flex flex-col gap-[12px]">
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[35px]">
          <h3 className="font-semibold text-[22px]">Resources</h3>
            <ul className="flex flex-col gap-[12px]">
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
