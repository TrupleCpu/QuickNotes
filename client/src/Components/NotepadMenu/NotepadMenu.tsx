import { useEffect } from "react"
import { Navigation } from "../Menu/Navigation"
import Notepad from "../Notepad"

const NotepadMenu = ({setProgress}: any) => {
  useEffect(() => {
    setProgress(70)
    setTimeout(() => {
        setProgress(100)
    }, 800);
},[])
  return (
    <>
    <Navigation />
    <Notepad/>
    </>
  )
}

export default NotepadMenu