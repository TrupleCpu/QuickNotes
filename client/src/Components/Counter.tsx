import { useEffect, useState } from "react"
import { useAppContext } from "./Context/AppContextProvider";
const Counter = ({text}: any) => {
    const [countedWords, setCountedWords] = useState<number>();
    const {openText}: any = useAppContext(); 

    const countWords = () => {
       let count = 0;
         if(openText){
           for(let i = 0; i < openText.length; i++){
              for(let j = 0; j < openText[i].length; j++){
               if(openText[i][j] && openText[i][j].text.trim !== ''){
                 let words = openText[i][j].text.split(' ');
                    for(let k = 0; k < words.length; k++){
                       if(words[k].trim() !== ''){
                          count++;
                 }
               }
            }
         }
         } 
    } else {
      for(let i = 0; i < text.length; i++){
        for(let j = 0; j < text[i].length; j++){
            if(text[i][j] && text[i][j].text.trim !== ''){
               let words = text[i][j].text.split(' ');
               for(let k = 0; k < words.length; k++){
                 if(words[k].trim() !== ''){
                    count++;
                 }
               }
            }
         }
    }
   }

   return count;
  }

    useEffect(() => {setCountedWords(countWords())},[text])
  return (
    <div className='fixed bottom left-0 z-20 bg-[whitesmoke] border-t border-b border-r dark:border-[gray] dark:text-white  dark:bg-[#323232] text-[.4rem] py-1 px-1 flex items-center font-semibold text-[gray]'>
        <p>{countedWords} words</p>
    </div>
  )
}

export default Counter