'use client'

import { motion } from 'framer-motion';
import CardComp from './Card_comp_combos';

const Slider = () => {
    const cards = [
        { id: 1, megas: '30 mb + tv', img: '/combos/30mb_tv.png', plan: '30' },
        { id: 2, megas: '50 mb + tv', img: '/combos/50mb_tv.png', plan: '50' },
        { id: 3, megas: '100 mb + tv', img: '/combos/100mb_tv.png', plan: '100' },
        { id: 4, megas: '200 mb + tv', img: '/combos/200mb_tv.png', plan: '200' },
    ];

  return (
    <div className="slider flex pt-10 overflow-visible">
      <motion.div whileTap={{cursor:"grabbing"}}>
        <motion.div drag='x' className="flex gap-x-10 px-10"  dragConstraints={{ right: 0, left: -750 }} 
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