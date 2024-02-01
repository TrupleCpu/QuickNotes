import { AnimatePresence, motion } from 'framer-motion'
import { useAppContext } from './Context/AppContextProvider'
import { useEffect } from 'react';


const NotSaved = () => {

   
  const {setOpenSave, setNotSave, notSave, setDisableContents} = useAppContext();
  
  const handleClick = () => {
    setNotSave(false);
    setOpenSave(true);
    setDisableContents(false)
  }

  const handleClickYes = () => {
    localStorage.removeItem('content');
    window.location.reload();
  }
  return (
   <AnimatePresence>
   {notSave && 
     <motion.div
     initial={{opacity: 0, scale: 0}}
     animate={{opacity: 1, scale: 1}}
     exit={{opacity: 0, scale: 0}}
     transition={{duration: 0.2}}
     className='fixed top-20 flex flex-col bg-white dark:text-white rounded-sm dark:bg-[#1E1E1E] items-center justify-center'> 
     <div className="border-b dark:border-[#393838] px-10 py-2">
     <p>Did you already saved the changes?</p>
     </div>
     <div className="flex gap-5 py-2">
      <button onClick={handleClickYes} className='hover:text-[#b7b7b7] transition-all'>Yes</button>
      <button onClick={handleClick} className='hover:text-[#b7b7b7] transition-all'>Not yet</button>
     </div>
    </motion.div>
   }
   </AnimatePresence>
  )
}

export default NotSaved