import { Editor } from "slate"
import { useSlate } from "slate-react"
import Tooltip from "../Tooltip";


interface CustomMark {
    size?: number;
}
const FontSizePicker = () => {
    const editor = useSlate();
   const fontSizes = [8, 10, 12, 14, 18, 24, 36, 64]

   const handleSizeChange = (FontSize: string) => {
     
    const size = FontSize ? Number(FontSize) : 14;

    if(editor.selection && Editor.string(editor, editor.selection)){
        Editor.addMark(editor, 'size', size);
    } else {
        Editor.removeMark(editor, 'size')
    }
   }

   const getFontSize = editor.selection && (Editor.marks(editor) as CustomMark)?.size;
   const currFontSize = getFontSize ? getFontSize : 14;

  return (
  <Tooltip content='Size'>
     <select
    value={currFontSize}
     onChange={(e) => handleSizeChange(e.target.value)}
      className="bg-[transparent] dark:text-white outline-none text-sm" >
    <option value="" disabled  hidden>Select a size</option>
    {fontSizes.map((size,index) => {
        return (
            <option className="dark:bg-[#323232]" key={index} value={size}>{`${size}px`}</option>
        )
    })}
   </select>
  </Tooltip>
  )
}

export default FontSizePicker