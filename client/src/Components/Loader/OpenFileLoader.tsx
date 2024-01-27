import {AnimatePresence, motion} from 'framer-motion'
import { useAppContext } from '../Context/AppContextProvider'
const OpenFileLoader = () => {
    const {openFileLoader} = useAppContext();
  return (
   <AnimatePresence>
    {openFileLoader  && 
       <motion.div
       className='absolute bg-[#1E1E1E] px-5 py-5 dark:text-white font-semibold'
       animate={{
           scale: [1, 2, 2, 1, 1], 
           rotate: [0, 0, 270, 270, 0],
           borderRadius: ["20%","20%","50%","50%","20%"]
       }}
       transition={{
           duration: 2,
           ease: "easeInOut",
           times: [0, 0.2, 0.5, 0.8, 1],
           repeat: Infinity,
           repeatDelay: 1
       }}
       >
        Loading
       </motion.div>   
}
   </AnimatePresence>
  )
}

export default OpenFileLoader