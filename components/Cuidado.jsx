import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cuidado = () => {
  return (
    <div className='flex flex-col bg-cuidado bg-center bg-no-repeat bg-cover pt-[35px] lg:pt-[35px] xl:pt-[100px] pb-[50px] lg:pb-[50px] xl:lg:pb-[100px]'>
        <div className='container flex items-center text-white'>
            <div className='flex flex-col gap-[40px] xl:gap-[70px]'>
                <h1 className='font-semibold text-[#FED058] text-[45px] lg:text-[66px]'>Cuidando nuestros paisajes</h1>
                <div className='w-auto md:w-[600px] flex flex-col gap-[28px] xl:gap-[60px]'>
                    <h2 className='font-lato text-[24px] font-normal text-white leading-[30px]'>
                        Como habitantes de la Patagonia estamos en contacto constante con las maravillas visuales y sensoriales que nos ofrece la región.
                    </h2>
                    <p className='font-lato font-normal text-white'>
                        Semejante privilegio viene acompañado por la responsabilidad de cuidar los mares, bosques, montañas, glaciares, ríos y lagos.
                    </p>
                    <p className='font-lato font-normal text-white'>
                        Apoyando iniciativas de reciclado, compostaje u optando por usar productos ecológicos estás ayudando a preservar nuestros recursos naturales y destinos turísticos.
                    </p>
                    <Link href='#' target="blanck">
                        <button className='rounded-xl border border-[#C4C4C4] drop-shadow-lg gap-2 justify-center text-[22px] leading-[26px] lg:text-[22px] lg:leading-[29px] xl:text-[33px] xl:leading-[39px] bg-white text-black font-montserrat font-normal py-3 md:py-1 px-6 flex items-center hover:scale-105 transition duration-300 ease-in-out mt-[15px]'>
                            <Image src="/hero/whatsapp.png" width={30} height={30} alt="" />
                            Chateá con nosotros
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cuidado