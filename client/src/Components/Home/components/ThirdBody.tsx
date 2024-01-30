import { useAppContext } from "../../Context/AppContextProvider"
import Aos from "aos";
import 'aos/dist/aos.css'
const MiddleBody = () => {
  const {thirdBodyRef} = useAppContext();
  Aos.init({
    once: true,
    mirror: false
  })
  
  return (
    <div   className='flex  flex-col items-center justify-center lg:px-20 px-2 bg-white py-14' ref={thirdBodyRef}>
        <div data-aos="fade-right" className="flex flex-col">
            <div className="border-b-2 pb-10">
            <p className='text-3xl font-semibold mb-7'>Overview</p>
            <p>QuickNotes is a user-friendly and feature-rich free online notepad browser designed to provide a seamless note-taking experience for users across various devices. With its intuitive interface and essential features, QuickNotes aims to be the go-to solution for individuals seeking a reliable and convenient digital notepad.</p>
            </div>
        </div>
        <div data-aos="fade-right" className="flex flex-col  ">
           <div className="border-b-2 pb-10">
           <p className='text-3xl font-semibold mb-7'>How does it work?</p>
            <p>
            Users can access QuickNotes by opening their preferred web browser and navigating to the QuickNotes website. The platform is browser-based, eliminating the need for downloads or installations. And  as users type, QuickNotes automatically saves their work locally on the device. This ensures that every keystroke is preserved, mitigating the risk of data loss in the event of unexpected interruptions or browser crashes.
            </p>
           </div>
        </div>
    </div>
  )
}

export default MiddleBody