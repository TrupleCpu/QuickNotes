import { useSlate } from "slate-react"
import { Editor } from "slate"
const ColorPicker = () => {
   const editor = useSlate();

   const handleColorChange = (color: string) => {
    if(editor.selection && Editor.string(editor, editor.selection)){
       Editor.addMark(editor, 'color', color);
    } else {
        Editor.removeMark(editor, 'color');
    }
   }

  return (
    <input type='color'
    className="bg-[transparent]"
    onChange={(e) => {
        e.preventDefault();
        const color = e.target.value;
        handleColorChange(color);
    }}
    />
  )
}

export default ColorPicker