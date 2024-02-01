import { useEffect } from 'react'
import FirstBody from './components/FirstBody'
import ThirdBody from './components/ThirdBody'
import Navbar from './components/Navbar'
import SecondBody from './components/SecondBody'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet'

const Home = ({setProgress}: any ) => {
   
  useEffect(() => {
    setProgress(70)
    setTimeout(() => {
        setProgress(100)
    }, 800);
},[])
  
  return (
    <div className=''> 
    <Helmet>
      <title>QuickNotes - Online Notepad</title>
    </Helmet>
      <Navbar />
      <FirstBody />
      <SecondBody />
      <ThirdBody />
      <Footer />
    </div>
  )
}

export default Home