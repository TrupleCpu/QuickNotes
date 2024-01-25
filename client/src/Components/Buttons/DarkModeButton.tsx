import classNames from 'classnames';
import { useEffect, useState } from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'

const DarkModeButton = () => {
    const [theme, setTheme] = useState<string>("light");
    const [isSelected, setSelected] = useState<boolean>(false);

    useEffect(() => {
      let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.appendChild(document.createElement('style')).sheet?.insertRule('::-webkit-scrollbar {background-color: #Ffffff}', 0)
      
      if(isDarkMode){
        document.documentElement.classList.add("dark");
        document.body.style.backgroundColor = '#1E1E1E'
        
        setSelected(true);
        setTheme("dark");
    } 
    else {
        document.documentElement.classList.remove("dark");
        document.body.style.backgroundColor = '#Ffffff'
        setSelected(false);
        setTheme("light");

      } 
    },[])
    
    const handleDarkTheme = () => {
      document.documentElement.classList.toggle("dark");
      document.body.style.background = theme === "dark" ? "#Ffffff" : "#1E1E1E";
      setSelected(!isSelected);
      setTheme(theme === "light" ? "dark" : "light");
    }
    return (
    <div
    onClick={handleDarkTheme}
    className={classNames(' hover:cursor-pointer flex w-8 h-4 bg-[#dedcdc] dark:bg-[#1E1E1E] m-10 rounded-full transition-all', {
        'bg-gray-600 ': isSelected,
    })}
    >
        <span className={classNames('h-4 w-4 text-xs bg-white dark:bg-black rounded-full transition-all flex items-center justify-center', {
            'ml-4': isSelected,
            'bg-black': isSelected
        })}>
        {isSelected ?  <FaSun className='text-white' /> : <FaMoon className='text-[#1C1E21]' />   }
        </span>

    </div>
  )
}

export default DarkModeButton