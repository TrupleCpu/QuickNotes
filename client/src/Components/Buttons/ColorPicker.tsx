import { useSlate } from "slate-react"
import { Editor } from "slate"
import Tooltip from "../Tooltip";
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
    <Tooltip content='Color'>
      <input type='color'
    className="bg-[transparent]"
    onChange={(e) => {
        e.preventDefault();
        const color = e.target.value;
        handleColorChange(color);
    }}
    />
    </Tooltip>
  )
}

export default ColorPicker