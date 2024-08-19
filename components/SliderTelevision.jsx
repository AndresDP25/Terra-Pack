'use client'

import { motion } from 'framer-motion';
import CardComp from './Card_comp_television';

const Slider = () => {
    const cards = [
        { id: 1, megas: 'Plan 1', img: '/television/plan1.png', plan: 'plan1' },
        { id: 2, megas: 'Plan 2', img: '/television/plan2.png', plan: 'plan2' },
        { id: 3, megas: 'Plan 3', img: '/television/plan3.png', plan: 'plan3' },
        { id: 4, megas: 'Plan 4', img: '/television/plan4.png', plan: 'plan4' },
    ];

  return (
    <div className="slider flex pt-10 overflow-visible">
      <motion.div whileTap={{cursor:"grabbing"}}>
        <motion.div drag='x' className="flex gap-x-7 md:gap-x-15 px-10"  dragConstraints={{ right: 0, left: -900 }} 
        dragTransition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-1"
              >
                {<CardComp megas={card.megas} img={card.img} plan={card.plan} />}
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </div>
    
  )
}

export default Slider