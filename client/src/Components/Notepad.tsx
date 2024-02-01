import { useCallback, useEffect, useMemo, useState } from "react";
import {createEditor, Descendant} from 'slate';
import {Slate, Editable, withReact} from 'slate-react';
import Toolbar from "./Toolbar";
import { JSX } from "react/jsx-runtime";
import Counter from "./Counter";
import { useAppContext } from "./Context/AppContextProvider";
import SaveAs from "./SaveAs";
import { Helmet } from "react-helmet";
import NotSaved from "./NotSaved";
import OpenFileLoader from "./Loader/OpenFileLoader";
import { withHistory } from "slate-history";
import PrintLoader from "./Loader/PrintLoader";
import isHotkey from "is-hotkey";
import {toggleMark} from './Toolbar'

interface CustomText extends Text {
    color?: string
    font?: string
    size?: string
}
const HOTYKEYS: any = {
    'mod+b': 'bold',
    'mod+i': 'italics',
    'mod+u': 'underline'
}

const Notepad = () => {


    const {setOpenMenu, contentRef, setOpenSave, disableContents} = useAppContext();
    const [text, setText] = useState<any[]>([]);
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    const renderLeaf = useCallback((props: JSX.IntrinsicAttributes & { attributes: any; children: any; leaf: any; }) => <Leaf {...props} />, []);
    const renderElement = useCallback((props: JSX.IntrinsicAttributes & {attributes: any; children: any; element: any}) => <Element {...props} />, [])
    type CustomProperties = {
        type?: string,
        children?: [{text?: string}]
    }

    type CustomDescendant = Descendant & CustomProperties;
 
    const [value, setValue] = useState<CustomDescendant[]>(
        JSON.parse(localStorage.getItem('content') || 'null') || [{
                type: 'paragraph',
                children: [{text: 'Welcome to Online Notepad!' }] 
        }]
    )
   useEffect(() => {
    JSON.parse(localStorage.getItem('content') || 'null') || [{
        type: 'paragraph',
        children: [{text: 'Welcome to Online Notepad!'}]
}]

   },[])
    const handleSlateChange = (newValue: Descendant[]) => {
        setValue(newValue as CustomDescendant[]);

        const isAstChange = editor.operations.some(
            op => 'set_selection' !== op.type
        )

        if(isAstChange){
            const content = JSON.stringify(newValue);
            localStorage.setItem('content', content);

        }
    }

    useEffect(() => {setText(value.map((element) => element.children))},[value])
     

    const handleClick = () => {
        setOpenMenu(false)
        setOpenSave(false)
    }
    
   
    return (
        <>
    <Helmet>
    <title>QuickNotes - Text Editor</title>
    </Helmet>
    <Slate editor={editor} initialValue={value} onChange={handleSlateChange}>
     <Toolbar />
     <div className=' h-[90vh] flex  justify-center items-center ' >
     <div className="w-11/12 h-full lg:mt-[7.7rem] mt-[8.5rem]" ref={contentRef} >
       <Editable
       onClick={handleClick}
        renderLeaf={renderLeaf}
        renderElement={renderElement}
        onKeyDown={event => {
            for(const hotkeys in HOTYKEYS){
                if(isHotkey(hotkeys, event as any)){
                    event.preventDefault();
                    const mark = HOTYKEYS[hotkeys];
                    toggleMark(editor, mark)
                }
            }
        }}
        className="w-full min-h-[95%] bg-[whitesmoke] dark:border dark:border-[gray]  dark:text-white dark:bg-[#323232] outline-none rounded-sm p-2"
        style={{pointerEvents: disableContents ? 'none' : 'auto'}}
        />
       </div>
      <SaveAs/>
      <PrintLoader />
      <OpenFileLoader />
      <NotSaved />
     </div>
     <Counter text={text}/>
    </Slate>
    </>
  )
}


const Leaf = ({attributes, children, leaf}: {attributes: any, children: any, leaf: any}) => {

    const style = { color: (leaf as CustomText).color, fontSize: (leaf as CustomText).size, fontFamily: (leaf as CustomText).font }
    if(leaf.bold) {
        children = <strong style={style}>{children}</strong>
    }
    if(leaf.italics){
        children = <em style={style}>{children}</em>
    }
    if(leaf.underline){
        children = <u style={style}>{children}</u>
    }
    if((leaf as CustomText).color){
        children = <span style={style}>{children}</span>
    }
    if((leaf as CustomText).size){
        children = <span style={style}>{children}</span>
    }
    if((leaf as CustomText).font){
        children = <span style={style}>{children}</span>
    }
    return <span {...attributes}>{children}</span>
}

const Element = ({attributes, children, element}: {attributes: any, children: any, element: any}) => {
    const style = {textAlign: element.align}

    switch(element.type){
        case 'block-quote':
            return (
                <blockquote style={style} {...attributes}>{children}</blockquote>
            )
        case 'bulleted-list':
            return (
                <ul style={style} {...attributes}>{children}</ul>
            )   
        case 'list-item':
            return (
                <li style={style} {...attributes}>{children}</li>
            )
        case 'numbered-list':
            return (
                <ol style={style} {...attributes}>{children}</ol>
            ) 
        default: 
            return (
                <p style={style} {...attributes}>{children}</p>
            )    
    }

}
export default Notepad