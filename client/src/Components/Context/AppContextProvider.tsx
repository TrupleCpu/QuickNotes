import { ReactNode, createContext, useContext, useRef, useState } from "react";

interface AppContextProps {
    openMenu: boolean,
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>,
    openText: Array<object> | null,
    setOpenText: React.Dispatch<React.SetStateAction<Array<object> | null>>,
    contentRef: React.MutableRefObject<any>,
    thirdBodyRef: React.MutableRefObject<any>,
    openSave: boolean,
    setOpenSave: React.Dispatch<React.SetStateAction<boolean>>,
    notSave: boolean,
    setNotSave: React.Dispatch<React.SetStateAction<boolean>>,
    openFileLoader: boolean,
    setOpenFileLoader: React.Dispatch<React.SetStateAction<boolean>>,
    disableContents: boolean,
    setDisableContents: React.Dispatch<React.SetStateAction<boolean>>,
    printLoader: boolean,
    setPrintLoader: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    
    if(!context) {
        throw new Error('Must be within an app!');
    }

    return context;
}

interface AppContextProviderProps {
    children?: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
      const [openMenu, setOpenMenu] = useState<boolean>(false);
      const [openText, setOpenText] = useState<Array<object> | null>(null);
      const [openSave, setOpenSave] = useState<boolean>(false);
      const [notSave, setNotSave] = useState<boolean>(false)
      const [openFileLoader, setOpenFileLoader] = useState<boolean>(false)
      const [disableContents, setDisableContents] = useState<boolean>(false)
      const [printLoader, setPrintLoader] = useState<boolean>(false)
     const contentRef = useRef<any>()
     const thirdBodyRef = useRef<any>()
    return (
        <AppContext.Provider value={{printLoader, setPrintLoader, disableContents,setDisableContents, openFileLoader, setOpenFileLoader,notSave, setNotSave, openSave,setOpenSave,openMenu, setOpenMenu, openText, setOpenText, contentRef, thirdBodyRef}}>
         {children}
        </AppContext.Provider>
    )
}