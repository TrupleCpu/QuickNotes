import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
   
    const navigate = useNavigate();

  return (
    <>
    <div className='h-screen flex items-center justify-center'>
       <div className="flex flex-col items-center justify-center dark:bg-[#323232] dark:text-white bg-[whitesmoke] px-5 py-6 rounded-md">
           <FcSearch className="text-[10rem]" />
           <p className="text-5xl font-semibold">404 Page not found</p>
           <p className="mt-5 hover:text-[gray] cursor-pointer" onClick={() => navigate('/')}>Go back to home page</p>
       </div>
    </div>
    </>
  )
}

export default NotFound