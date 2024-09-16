import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Sumate = () => {
  return (
    <div className='w-full bg-sumate bg-center bg-no-repeat bg-cover pt-[30px] pb-[30px]'>
        <motion.div 
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.1}} 
        className='container'>
            <h1 className='font-semibold drop-shadow-lg text-white text-center'>Sumate a la economía del futuro</h1>
        </motion.div>
    </div>
  )
}

export default Sumate