import axios from 'axios';
import { useEffect, useState } from 'react';
import { Node } from 'slate';
import { IoMdClose } from "react-icons/io";
import { useAppContext } from './Context/AppContextProvider';
import {motion, AnimatePresence} from 'framer-motion'
import Loader from './Loader/Loader';
 const SaveAs = () => {
        
        const [loaderTXT, setLoaderTXT] = useState<boolean>(false);
        const [loaderDocx, setLoaderDocx] = useState<boolean>(false);
        const {setOpenSave, openSave, setDisableContents} = useAppContext();
        const [filename, setFilename] = useState<string>('');
        const [errorMsg, setErrorMsg] = useState<boolean>(false);

        const onClickSaveDOCX = () => {
            const getLocalStorage: any = localStorage.getItem('content');
            const children = JSON.parse(getLocalStorage)
            const data = JSON.stringify({ children });

            if(!getLocalStorage){
                setErrorMsg(true)
                return;
            }
            setLoaderDocx(true)
            setDisableContents(true)

            axios.post('http://localhost:5000/api/ConvertToWord', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
                responseType: 'blob'
            })        
                .then((response) => {
                    const url = window.URL.createObjectURL(response.data);
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download',  filename ? `${filename}.docx` : 'word.docx');
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                    setLoaderDocx(false)
                    setOpenSave(false)
                    setDisableContents(false)
                })
                .catch((error: any) => {
                    console.error(error)
                }); 
        }
         useEffect(() => {
          if(errorMsg){
            setTimeout(() => {
                setErrorMsg(false)
           }, 5000)
          }
         },[errorMsg])
        const onClickSaveTXT = () => {
            const textValues = localStorage.getItem('content');
            
            if(!textValues){
                setErrorMsg(true)
                return;
            }
            setLoaderTXT(true)
            setDisableContents(true)
            if(textValues){
            const parsedContents = JSON.parse(textValues);
            const text: any = parsedContents.map((n: Node) => Node.string(n)).join('\n')
            const blob = new Blob([text], {type: 'text/plain'});
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename ? `${filename}.txt` : 'notepad.txt';
            link.click();
            setLoaderTXT(false)
            setOpenSave(false)
            setDisableContents(false)
            URL.revokeObjectURL(url);
            }
        }
        
    return (
        <AnimatePresence>
            {openSave && <motion.div
             initial={{opacity: 0, scale: 0}}
             animate={{opacity: 1, scale: 1}}
             exit={{opacity: 0, scale: 0}}
             transition={{duration: 0.2}}
             className='fixed top-20 flex flex-col bg-white dark:bg-[#1E1E1E] items-center justify-center'>
            <div className='flex w-full px-[1.90rem] text-xl font-semibold border-b py-1 dark:border-[#393838] dark:text-white relative'>
                <p>Save As</p>
               <button  className='absolute right-2 hover:text-[gray]' onClick={() => setOpenSave(false)}><IoMdClose/></button>
            </div>
            <form action="" className='border-b dark:border-[#393838] px-8 flex gap-10 mb-2 py-4 dark:text-white'>
                <label htmlFor="" className='text-xs  font-semibold items-center flex justify-center'>Filename: </label>
                <input type='text' 
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                className='relative outline-none px-2 py-1 dark:bg-[#1E1E1E] text-[.9rem] focus-within:border-blue-500 border rounded-sm' />
                {errorMsg && <p className='absolute mt-8 right-8  text-[.60rem] text-red-500 '>Are you sure you made some changes?</p>}
            </form>
            <div className="flex w-full  justify-end px-10 gap-4 py-2">
                {loaderDocx ? (
                    <button className='bg-blue-400    transition-all px-1 text-xs font-semibold py-1 rounded-sm text-white' onClick={onClickSaveTXT} disabled><p className={loaderTXT ? 'w-[70.4px]' : ''}>{loaderTXT ? <Loader /> : 'Save as Txt' }</p></button>
                ):(
                    <button className='bg-blue-400  hover:bg-[#3399ff]  transition-all px-1 text-xs font-semibold py-1 rounded-sm text-white' onClick={onClickSaveTXT}><p className={loaderTXT ? 'w-[70.4px]' : ''}>{loaderTXT ? <Loader /> : 'Save as Txt' }</p></button>
                )}
               {loaderTXT ? (
                 <button  className='bg-blue-400   transition-all px-1 text-xs font-semibold py-1 rounded-sm text-white' onClick={onClickSaveDOCX} disabled><p className={loaderDocx ? 'w-[70.4px]' : ''}>{loaderDocx ? <Loader /> : 'Save as Docx' }</p></button>
               ):(
                 <button  className='bg-blue-400  hover:bg-[#3399ff]  transition-all px-1 text-xs font-semibold py-1 rounded-sm text-white' onClick={onClickSaveDOCX}><p className={loaderDocx ? 'w-[70.4px]' : ''}>{loaderDocx ? <Loader /> : 'Save as Docx' }</p></button>
               )}
            </div>
            </motion.div>
            }
        </AnimatePresence>
    )
    }

    export default SaveAs