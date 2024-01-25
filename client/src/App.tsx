import './App.css'
import {Route, Routes, RedirectFunction} from 'react-router-dom'
import NotepadMenu from './Components/NotepadMenu/NotepadMenu'
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
     <Route path='/notepad' element={<NotepadMenu />} />
     <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
