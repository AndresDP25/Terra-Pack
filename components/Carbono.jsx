import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Carbono = () => {
  return (
    <div className='flex flex-col bg-white pt-[60px] lg:pt-[60px] xl:pt-[100px] pb-[40px] lg:pb-[70px] xl:lg:pb-[120px]'>
        <div className='container flex items-center justify-center gap-8 xl:gap-60 text-white flex-col md:flex-row'>
            <div className='flex flex-col gap-[40px]'>
                <h1 className='font-semibold text-black'>Adiós huella de carbono</h1>
                <div className='w-auto md:w-[600px] flex flex-col gap-[38px] xl:gap-[70px]'>
                    <p className='font-lato font-normal text-black'>
                        Hacer la transición hacia productos de triple impacto —económico, ecológico y social— representa un paso importante para la conservación de nuestros paisajes y la limpieza de nuestras ciudades.
                    </p>
                    <p className='font-lato font-normal text-black'>
                        Si tenés un emprendimiento gastronómico, un bazar o un cotillón, no dudes en ponerte en contacto para hacer tu primer pedido o solicitar una muestra gratis.
                    </p>
                    <Link href='#' target="blanck">
                        <button className='rounded-xl border border-[#C4C4C4] drop-shadow-lg gap-2 justify-center text-[22px] leading-[26px] lg:text-[22px] lg:leading-[29px] xl:text-[33px] xl:leading-[39px] bg-white text-black font-montserrat font-normal py-3 md:py-1 px-6 flex items-center hover:scale-105 transition duration-300 ease-in-out mt-[15px]'>
                            <Image src="/hero/whatsapp.png" width={30} height={30} alt="" />
                            Chateá con nosotros
                        </button>
                    </Link>
                </div>
            </div>
            <div >
                <Image src="/carbono/hoja.png" width={250} height={150} alt="" className='hidden md:block' />
                <Image src="/carbono/hoja.png" width={150} height={150} alt="" className='md:hidden' />
            </div>
        </div>
    </div>
  )
}

export default Carbono