import {
    Card
  } from "@/components/ui/card";
  import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import {Link as ScrollLink } from 'react-scroll'


const Card_comp_combos = ({ megas, img, handleSelectionsChangeC }) => {
  const [tvChecked, setTvChecked] = useState(false);
  const [futbolChecked, setFutbolChecked] = useState(false);
  const [hboChecked, setHboChecked] = useState(false);
  const [paramountChecked, setParamountChecked] = useState(false);

  const handleTvChange = (e) => {
      setTvChecked(e.target.checked);
  };

  const handleFutbolChange = (e) => {
      setFutbolChecked(e.target.checked);
  };

  const handleHboChange = (e) => {
      setHboChecked(e.target.checked);
  };

  const handleParamountChange = (e) => {
      setParamountChecked(e.target.checked);
  };

  const handleContractButtonClick = () => {
    const selections = {
      megas,
      tvChecked,
      futbolChecked,
      hboChecked,
      paramountChecked
    };
    handleSelectionsChangeC(selections);
    // Resetear los estados 
    setTvChecked(false);
    setFutbolChecked(false);
    setHboChecked(false);
    setParamountChecked(false);
  };

  return (
    <Card className="pt-[45px] md:pt-[50px] pb-[20px] md:pb-[30px] relative w-[233px] lg:w-[300px]" style={{ borderTopRightRadius: '50px', borderBottomLeftRadius: '50px', boxShadow: '0 0 10px 0 #6A16CB' }}>
      <div className="flex justify-center absolute top-0 left-0 right-0 transform translate-y-[-50%] ">
        <Button className="uppercase text-[18px] md:text-[22px] py-5 md:py-6 px-[30px] md:w-[160px] bg-combosCard text-combos" style={{ pointerEvents: 'none' }}>{megas}</Button>
      </div>
      <div className="flex justify-center items-center pt-2">
        <Image src={img} width={130} height={130} alt="" />
      </div>
      {/* opciones */}
      <div className="flex flex-col px-8 pt-4">
        <div className="flex gap-2 px-4 items-center">
            <input type="checkbox" id="tv" checked={tvChecked} onChange={handleTvChange} className="h-4 w-4" />
            <label htmlFor="tv" className="text-black cursor-pointer normal-case font-bold text-[12px] pt-2">TV</label>
        </div>
        <hr className="w-full my-1 border-green" />
        <div className="flex gap-2 px-4 items-center">
            <input type="checkbox" id="futbol" checked={futbolChecked} onChange={handleFutbolChange} className="h-4 w-4" />
            <label htmlFor="futbol" className="text-black cursor-pointer normal-case font-bold text-[12px] pt-2">Pack fútbol</label>
        </div>
        <hr className="w-full my-1 border-green" />
        <div className="flex gap-2 px-4 items-center">
            <input type="checkbox" id="hbo" checked={hboChecked} onChange={handleHboChange} className="h-4 w-4" />
            <label htmlFor="hbo" className="text-black cursor-pointer normal-case font-bold text-[12px] pt-2 w-[100px]">HBO premium + HBO max</label>
        </div>
        <hr className="w-full my-1 border-green" />
        <div className="flex gap-2 px-4 items-center">
            <input type="checkbox" id="hbo" checked={paramountChecked} onChange={handleParamountChange} className="h-4 w-4" />
            <label htmlFor="hbo" className="text-black cursor-pointer normal-case font-bold text-[12px] pt-2">Paramount</label>
        </div>
        <hr className="w-full my-1 border-green" />
      </div>
      <div className="flex justify-center pt-[30px]">
          <ScrollLink to="contacto" smooth={true} offset={-80}>
            <Button onClick={handleContractButtonClick} className="capitalize lg:w-auto text-[15px] md:text-[21px] font-normal">Contratar</Button>
          </ScrollLink>
      </div>
    </Card>
  );
};

export default Card_comp_combos;
