'use client'

import { motion } from 'framer-motion';
import CardComp from './Card_comp_internet';

const Slider = () => {
    const cards = [
        { id: 1, megas: '300 mb', img: '/empresas/300mb.png', plan: '300' },
        { id: 2, megas: '500 mb', img: '/empresas/500mb.png', plan: '500' },
        { id: 3, megas: '1 gb', img: '/empresas/1gb.png', plan: '1' },
    ];

  return (
    <div className="slider flex pt-10 overflow-visible">
      <motion.div whileTap={{cursor:"grabbing"}}>
        <motion.div drag='x' className="flex gap-x-10 px-10"  dragConstraints={{ right: 0, left: -500 }} 
        dragTransition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-1"
              >
                {<CardComp megas={card.megas} img={card.img} plan={card.plan} colortext='text-botons' colorbg='bg-text' />}
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </div>
    
  )
}

export default Slider