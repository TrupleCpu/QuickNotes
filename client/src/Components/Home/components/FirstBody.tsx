import { useNavigate } from "react-router-dom"

const FirstBody = () => {
  
  const navigate = useNavigate();

  return (
    <div className='bg-blue-500 py-56 text-white px-2'>
        <div className='flex items-center justify-center'>
            <p className='text-4xl s  font-semibold'>Your Online Notepad, Anywhere, Anytime</p>
        </div>
        <div className="flex items-center justify-center text-lg">
            <p>Take notes and stay organized with our easy-to-use online notepad.</p>
        </div>
        <div className='flex items-center justify-center mt-5'>
          <button className='border text-lg px-10 py-2 hover:bg-[#5b5bf4] transition-all' onClick={() => navigate('/notepad')}>Get Started</button>
        </div>
    </div>
  )
}

export default FirstBody