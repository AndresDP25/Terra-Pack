import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Bioplasticos = () => {
  return (
    <div className='bg-[#0A845C] flex flex-col bg-top bg-no-repeat bg-cover md:pt-[50px] lg:pt-[50px] xl:lg:pt-[100px] pb-[50px] lg:pb-[80px] xl:pb-[100px]' id="cuidado">
        <motion.div 
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.1}} 
        className='container flex flex-col md:flex-row justify-center items-center text-white gap-1 xl:gap-28 max-w-[1080px] xl:max-w-[1400px]'>
            <div>
                <Image src="/bioplasticos/Manzana.png" width={520} height={530} alt="" className='hidden md:block' />
                <Image src="/bioplasticos/Manzana.png" width={300} height={530} alt="" className='md:hidden' />
            </div>
            <div className='flex flex-col gap-[65px] justify-end items-end'>
                <h1 className='font-semibold w-auto md:w-[548px] xl:w-[680px] text-yellow md:text-end'>Bioplásticos: abono en vez de basura</h1>
                <div className='w-auto md:w-[595px] md:text-end flex flex-col gap-[30px]'>
                    <p className='font-normal text-white font-lato'>
                        Los envases producidos a partir de polímeros orgánicos tienen la capacidad de reintegrarse al ecosistema en menos de 180 días, dejando las materias primas en manos de sus ciclos naturales.
                    </p>
                    <p className='font-normal text-white font-lato'>
                        Nuestros productos están fabricados con almidón de maíz, bagazo de caña de azúcar, papel y cartón.
                    </p>
                    <p className='font-normal text-white font-lato'>
                        Pedinos cotización, modelos y sumate al cambio sustentable.
                    </p>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Bioplasticos