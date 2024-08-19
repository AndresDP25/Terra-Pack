import {
    Card
  } from "@/components/ui/card";
  import { Button } from "./ui/button";
import Image from "next/image";
import {Link as ScrollLink } from 'react-scroll'


const Card_comp_internet = ({ megas, img, onClick, colortext, colorbg }) => {
  return (
    <Card className="pt-[45px] md:pt-[50px] pb-[20px] md:pb-[25px] relative w-[233px] md:w-[250px]" style={{ borderTopRightRadius: '40px', borderBottomLeftRadius: '40px',  boxShadow: '0 0 10px 0 #6A16CB' }}>
      <div className='flex justify-center  absolute top-0 left-0 right-0 transform translate-y-[-50%]'>
        <Button className={`uppercase lg:w-auto text-[18px] md:text-[22px] py-5 md:py-6 px-[30px] ${colortext} ${colorbg}`} style={{ pointerEvents: 'none' }}>{megas}</Button>
      </div>
      <div className="flex justify-center items-center">
        <Image src={img} width={130} height={130} alt="" />
      </div>
      <div className="flex justify-center pt-[30px]">
        <ScrollLink to="contacto" smooth={true} offset={-80}>
          <Button onClick={onClick} className="capitalize lg:w-auto text-[15px] md:text-[21px] font-normal">Contratar</Button>
        </ScrollLink>
      </div>
    </Card>
  );
};

export default Card_comp_internet;
