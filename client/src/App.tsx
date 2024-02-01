import './App.css'
import {Route, Routes} from 'react-router-dom'
import NotepadMenu from './Components/NotepadMenu/NotepadMenu'
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'

function App() {
  const [progress, setProgress] = useState<number>(0)
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowChange = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowChange);
    return () => window.removeEventListener('resize', handleWindowChange);
  }, [])

  const isMobile = width >= 790;

  return (
    <>
     {isMobile && <LoadingBar
        className='abosolute'
        color='#87ceeb'
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />}
    <Routes>
      <Route path='/' element={<Home  setProgress={setProgress} />}/>
     <Route path='/notepad' element={<NotepadMenu setProgress={setProgress} />} />
     <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
