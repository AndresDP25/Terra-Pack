import {
    Card
  } from "@/components/ui/card";
  import { Button } from "./ui/button";
import Image from "next/image";
import {Link as ScrollLink } from 'react-scroll'

const Card_comp_television = ({ megas, img, onClick }) => {
  return (
    <Card className="pt-[52px] md:pt-[50px] pb-[30px] md:pb-[25px] relative w-[260px] md:w-[280px] lg:w-[378]" style={{ borderTopRightRadius: '50px', borderBottomLeftRadius: '50px',  boxShadow: '0 0 10px 0 #6A16CB' }}>
      <div className="flex justify-center absolute top-0 left-0 right-0 transform translate-y-[-50%]">
        <Button className="uppercase bg-text text-botons text-[18px] lg:text-[20px] py-5 md:py-5 px-[30px] lg:w-[135px]" style={{ pointerEvents: 'none' }}>{megas}</Button>
      </div>
      <div className="flex justify-center items-center">
        <Image src={img} width={210} height={150} alt="" />
      </div>
      <div className="flex justify-center pt-[30px]">
        <ScrollLink to="contacto" smooth={true} offset={-80}>
          <Button onClick={onClick} className="capitalize lg:w-auto text-[15px] md:text-[16px] lg:text-[21px] font-normal md:w-[124px]">Contratar</Button>
        </ScrollLink>
      </div>
    </Card>
  );
};

export default Card_comp_television;
