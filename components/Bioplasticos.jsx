import Image from 'next/image'
import React from 'react'

const Bioplasticos = () => {
  return (
    <div className='bg-[#0A845C] flex flex-col bg-top bg-no-repeat bg-cover pt-[148px] md:pt-[180px] lg:pt-[73px] pb-[343px] md:pb-[650px] lg:pb-[106px]' id="cuidado">
        <div className='container flex justify-between items-center text-white'>
            <div>
                <Image src="/bioplasticos/Manzana.png" width={548} height={573} alt="" />
            </div>
            <div className='flex flex-col gap-[72px] justify-end items-end'>
                <h1 className='text-[55px] font-semibold w-[648px] text-yellow text-end'>Bioplásticos: abono en vez de basura</h1>
                <div className='w-[666px] text-end flex flex-col gap-[40px]'>
                    <p className='text-[24px] font-normal text-white leading-[30px]'>
                        Los envases producidos a partir de polímeros orgánicos tienen la capacidad de reintegrarse al ecosistema en menos de 180 días, dejando las materias primas en manos de sus ciclos naturales.
                    </p>
                    <p className='text-[24px] font-normal text-white leading-[30px]'>
                        Nuestros productos están fabricados con almidón de maíz, bagazo de caña de azúcar, papel y cartón.
                    </p>
                    <p className='text-[24px] font-normal text-white leading-[30px]'>
                        Pedinos cotización, modelos y sumate al cambio sustentable.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bioplasticos