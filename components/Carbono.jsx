import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Carbono = () => {
  return (
    <div className='flex flex-col bg-carbono bg-center bg-no-repeat bg-cover pt-[148px] md:pt-[180px] lg:pt-[73px] pb-[343px] md:pb-[650px] lg:pb-[106px]' id="productos">
        <div className='container flex items-center text-white'>
            <div className='flex flex-col gap-[62px]'>
                <h1 className='text-[64px] font-semibold text-black'>Adiós huella de carbono</h1>
                <div className='w-[666px] flex flex-col gap-[38px]'>
                    <p className='font-lato text-[24px] font-normal text-black leading-[30px]'>
                        Hacer la transición hacia productos de triple impacto —económico, ecológico y social— representa un paso importante para la conservación de nuestros paisajes y la limpieza de nuestras ciudades.
                    </p>
                    <p className='font-lato text-[24px] font-normal text-black leading-[30px]'>
                        Si tenés un emprendimiento gastronómico, un bazar o un cotillón, no dudes en ponerte en contacto para hacer tu primer pedido o solicitar una muestra gratis.
                    </p>
                    <Link href='https://drive.google.com/file/d/1_vGgRQ4WtwYfyuIbL5cfyUPELlCQw7fs/view?usp=sharing' target="blanck">
                        <button className='rounded-xl border border-[#C4C4C4] drop-shadow-lg gap-8 justify-center text-[22px] leading-[26px] lg:text-[22px] lg:leading-[29px] xl:text-[33px] xl:leading-[39px] bg-white text-black font-montserrat font-normal py-2 w-[210px] lg:w-[360px] xl:w-[220px] flex items-center hover:scale-105 transition duration-300 ease-in-out mt-[15px]'>
                            <Image src="/hero/whatsapp.png" width={36} height={33} alt="" />
                            Chateá con nosotros
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carbono