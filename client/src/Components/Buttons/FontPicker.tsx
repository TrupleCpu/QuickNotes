import { useSlate } from 'slate-react';
import { Editor } from 'slate';

interface CustomText {
    font?: string
}

const FontPicker = () => {
   const editor = useSlate();
   const fontFamilies: string[] = [
    "Arial", "Helvetica", "Verdana", "Trebuchet MS", "Gill Sans", "Noto Sans", 
    "Avantgarde", "TeX Gyre Adventor", "URW Gothic L", "Optima", "Arial Narrow",    
    "Times", "Times New Roman", "Didot", "Georgia", "Palatino", "URW Palladio L", 
    "Bookman", "URW Bookman L", "New Century Schoolbook", "TeX Gyre Schola", 
    "American Typewriter", "Andale Mono", "Courier New", "Courier", "FreeMono", "OCR A Std", "DejaVu Sans Mono",
    "Comic Sans MS", "Comic Sans", "Apple Chancery", "Bradley Hand", 
    "Brush Script MT", "Brush Script Std"
  ];
  
    const handleFontChange = (font: string) => {

        if(editor.selection && Editor.string(editor, editor.selection)){
            Editor.addMark(editor, 'font', font);
        } else {
            Editor.removeMark(editor, 'font')
        }
        
        
    }
    
    const getFontSize = editor.selection && (Editor.marks(editor) as CustomText)?.font;
    const currFont = getFontSize ? getFontSize : "";
    return (
    <select value={currFont} onChange={(e) => handleFontChange(e.target.value)}
     className='font-custom outline-none bg-[transparent] dark:text-white text-sm '>
        <option value="" disabled  hidden>Select a font</option>
       {fontFamilies.map((font,index) => {
        return (
            <option key={index} value={font} className='dark:bg-[#1E1E1E]'>{font}</option>
        )
       })}
    </select>
  )
}

export default FontPicker