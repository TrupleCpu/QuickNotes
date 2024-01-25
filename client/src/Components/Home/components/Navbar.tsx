
import { Link } from 'react-router-dom'
import NoteIcon from '../../../assets/notes.png'
import { useAppContext } from '../../Context/AppContextProvider'
const Navbar = () => {
  
   const {thirdBodyRef} = useAppContext();

   const onScrollRef = () => {
      thirdBodyRef.current?.scrollIntoView({behavior: 'smooth'})
   }
   
  return (
  <div  className="flex justify-between lg:px-10 px-3 py-3 bg-[whitesmoke] border-b ">
   <div onClick={() => window.location.reload()} className='flex gap-2 items-center cursor-pointer'>
      <img className='w-8' src={NoteIcon} />
     <p className='font-bold'>QuickNotes</p>
   </div>
   <div className='flex text-sm gap-3 items-center font-semibold'>
   <div onClick={() => window.location.reload()} className='hover:text-[#7b7b7b] cursor-pointer transition-all'>
      <p>Home</p>
   </div>
   <div onClick={onScrollRef} className='hover:text-[#7b7b7b] cursor-pointer transition-all'>
      <p>About</p>
   </div>
   <div className='hover:text-[#7b7b7b] cursor-pointer transition-all'>
      <p><Link to='/notepad'>Notepad</Link></p>
   </div>
   </div>
  </div>
  )
}

export default Navbar