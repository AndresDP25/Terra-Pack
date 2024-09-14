import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cuidado = () => {
  return (
    <div className='flex flex-col bg-cuidado bg-center bg-no-repeat bg-cover pt-[148px] md:pt-[180px] lg:pt-[73px] pb-[343px] md:pb-[650px] lg:pb-[106px]'>
        <div className='container flex items-center text-white'>
            <div className='flex flex-col gap-[62px]'>
                <h1 className='text-[64px] font-semibold text-[#FED058]'>Cuidando nuestros paisajes</h1>
                <div className='w-[666px] flex flex-col gap-[38px]'>
                    <h2 className='font-lato text-[24px] font-normal text-white leading-[30px]'>
                        Como habitantes de la Patagonia estamos en contacto constante con las maravillas visuales y sensoriales que nos ofrece la región.
                    </h2>
                    <p className='font-lato text-[24px] font-normal text-white leading-[30px]'>
                        Semejante privilegio viene acompañado por la responsabilidad de cuidar los mares, bosques, montañas, glaciares, ríos y lagos.
                    </p>
                    <p className='font-lato text-[24px] font-normal text-white leading-[30px]'>
                        Apoyando iniciativas de reciclado, compostaje u optando por usar productos ecológicos estás ayudando a preservar nuestros recursos naturales y destinos turísticos.
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

export default Cuidado