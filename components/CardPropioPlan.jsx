import {
    Card
  } from "@/components/ui/card";
  import { Button } from "./ui/button";
import { useState } from "react";
import {Link as ScrollLink } from 'react-scroll'

const CardPropioPlan = ({ handleSelectionsChange }) => {
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
        tvChecked,
        futbolChecked,
        hboChecked,
        paramountChecked
      };
      handleSelectionsChange(selections);
      // Resetear los estados 
      setTvChecked(false);
      setFutbolChecked(false);
      setHboChecked(false);
      setParamountChecked(false);
    };

  return (
    <Card className="pb-[30px] md:pb-[25px] w-[295px] md:w-[295px]" style={{ borderTopRightRadius: '50px', borderBottomLeftRadius: '50px',  boxShadow: '0 0 10px 0 #6A16CB' }}>
      <div className="flex justify-center">
        <h2 className="text-botons text-[18px] lg:text-[20px] py-5 md:py-5 px-[30px] text-center">Armá tu<br/>propio plan</h2>
      </div>
      {/* opciones */}
      <div className="flex flex-col px-8">
        <hr className="w-full my-1 border-green" />
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
            <label htmlFor="hbo" className="text-black cursor-pointer normal-case font-bold text-[12px] pt-2">HBO premium + HBO max</label>
        </div>
        <hr className="w-full my-1 border-green" />
        <div className="flex gap-2 px-4 items-center">
            <input type="checkbox" id="paramount" checked={paramountChecked} onChange={handleParamountChange} className="h-4 w-4" />
            <label htmlFor="paramount" className="text-black cursor-pointer normal-case font-bold text-[12px] pt-2">Paramount</label>
        </div>
        <hr className="w-full my-1 border-green" />
      </div>
      <div className="flex justify-center pt-[30px]">
        <ScrollLink to="contacto" smooth={true} offset={-80}>
          <Button onClick={handleContractButtonClick} className="capitalize lg:w-auto text-[15px] md:text-[16px] lg:text-[21px] font-normal md:w-[124px]">Contratar</Button>
        </ScrollLink>
      </div>
    </Card>
  );
};

export default CardPropioPlan;
