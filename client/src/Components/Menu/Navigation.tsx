import React, { MouseEventHandler, useEffect,useRef, useState } from 'react'
import { CiFolderOn,CiSaveUp2,CiFileOn   } from "react-icons/ci";
import { PiPrinterThin } from "react-icons/pi";
import DarkModeButton from "../Buttons/DarkModeButton";
import { BsArrowLeft } from "react-icons/bs";
import { useAppContext } from '../Context/AppContextProvider';
import axios from 'axios';

import ReactToPrint from 'react-to-print';

    export const Navigation = () => {
        const {openMenu, setOpenMenu, setOpenText, openText, contentRef, setOpenSave, setNotSave} = useAppContext();
        const openFileRef: any = useRef();
        const [, setFiles] = useState<any>();
        useEffect(() => {
            if(openMenu){
            document.getElementById('Nav')?.classList.add('custom-nav');
            } else {
                document.getElementById('Nav')?.classList.remove('custom-nav');
                setOpenMenu(false);
            }
        },[openMenu])
        
        const NavChangeClick = () => {
            document.getElementById('Nav')?.classList.remove('custom-nav');
            setOpenMenu(false)
        }
        const openFile = () => {
        openFileRef.current.click();
        }

        const handleFileChange = (e: any) => {
        setFiles(e.target.files[0]);
         
        const formData = new FormData();

        formData.append('file', e.target.files[0]);
        axios.post('http://localhost:5000/openFile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            setOpenText(response.data)
            console.log(response)
        }).catch((error: any) => {
            console.log(error)
        })
        }

        const newFile = () => {
            const localData = localStorage.getItem('content');

            if(!localData){
            localStorage.removeItem('content');
            window.location.reload();
            return;
            }
            setNotSave(true)
            setOpenMenu(false)

          }
          useEffect(() => {
            if(openText){
            console.log(JSON.stringify(openText))
            localStorage.setItem('content', JSON.stringify(openText));
            window.location.reload();
            }
          },[openText])

         
        const handleSaveClick = () => {
            setOpenMenu(false)
            setOpenSave(true)
        }
    return (
        <div id='Nav' className='fixed flex flex-col left-0 dark:border-r dark:border-[#4f4f4f] border dark:bg-black bg-[white] z-30 h-[100%] w-0 overflow-hidden  gap-2 text-xl text-[gray] pt-5 transition-all'>
            <Div onClick={NavChangeClick}>
                <BsArrowLeft />
                <p className='text-sm font-semibold'>Close </p>
            </Div>
            <Div onClick={openFile}>
                <CiFolderOn />
                <p className='text-sm font-semibold'>Open </p>
                <input type='file' onChange={handleFileChange}  className='hidden' accept=".txt" ref={openFileRef} />
            </Div>
            <Div onClick={newFile}>
                <CiFileOn  />
                <p className='text-sm font-semibold'>New </p>

            </Div>
            <Div onClick={handleSaveClick}>
                <CiSaveUp2 />
                <p className='text-sm font-semibold'>Save </p>
            </Div>
            <ReactToPrint
  trigger={() => <Div><PiPrinterThin /><p className='text-sm font-semibold'>Print</p></Div>}
  content={() => contentRef.current}
  pageStyle="@page { size: A4 portrait; margin: 0; } body { text-align: left; }"
/> 
            <DarkModeButton />
        </div>
    )
    }

    interface DivProps {
        children?: React.ReactNode;
        onClick?: MouseEventHandler;
    }
    const Div: React.FC<DivProps> = ({children, onClick}) => {
        return (
            <div onClick={onClick} className='flex items-center  gap-2 cursor-pointer hover:bg-[#333333] text-2xl py-1 px-4 dark:text-white transition-all text-black'>
                {children}
            </div>
        )
    }