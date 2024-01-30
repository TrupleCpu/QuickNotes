
import { BsTypeBold } from "react-icons/bs";
import { MdFormatItalic,
    MdFormatUnderlined, 
    MdFormatAlignLeft,
    MdFormatAlignRight,
    MdFormatAlignCenter,
    MdFormatAlignJustify 
} from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";

import Button from "./Buttons/Button"
import Icon from "./Buttons/Icon"
import { useSlate } from "slate-react";
import { Editor, Element as SlateElement, Transforms, Node as SlateNode } from "slate";
import ColorPicker from "./Buttons/ColorPicker";
import FontSizePicker from "./Buttons/FontSizePicker";
import FontPicker from "./Buttons/FontPicker";
import { useAppContext } from "./Context/AppContextProvider";
import Tooltip from "./Tooltip";
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

type CustomProperties = {
  align?: string | null;
}

type CustomNode = SlateNode & CustomProperties;

interface Transforms {
   setNodes: (
    editor: Editor,
    props: Partial<CustomNode>
   ) => void;
}
 
const Header = () => {
  const {setOpenMenu, setOpenSave, disableContents} = useAppContext();

  const openNavigation = () => {
     setOpenMenu(true);
  }
  
  
  
  return (
    <div onClick={() => setOpenSave(false)} className=' z-10 fixed  top-0 left-0 right-0 border-b dark:border-[gray] dark:bg-[#323232] bg-[whitesmoke]  flex flex-wrap items-center  py-1 px-1 '        style={{pointerEvents: disableContents ? 'none' : 'auto'}}
    >
    <button onClick={openNavigation} className="text-gray-400 border-r px-1 text-xl hover:text-[gray]"><Tooltip content='menu'><CgMenuGridR /></Tooltip></button>
    <MarkButton format='bold' icon={<BsTypeBold />}/> 
    <MarkButton format='italics' icon={<MdFormatItalic />} />
    <MarkButton format='underline' icon={<MdFormatUnderlined />} />
    <BlockButton format='left' icon={<MdFormatAlignLeft />} />
    <BlockButton format='right' icon={<MdFormatAlignRight />} />
    <BlockButton format='center' icon={<MdFormatAlignCenter />} />
    <BlockButton format='justify' icon={<MdFormatAlignJustify />} />
    <ColorPicker />
    <FontSizePicker />
    <FontPicker />
    </div>
  )
}


const MarkButton = ({format, icon}: {format: string, icon: React.ReactNode}) => {
  const editor = useSlate();
  return (
   
     <Button
    onMouseDown={(e) => {
      e.preventDefault();
      toggleMark(editor, format);
    }}
    >
      <Tooltip content={format}>
      <Icon  active={isMarkActive(editor, format)}>{icon}</Icon>
      </Tooltip>
    </Button>

  )
}

const BlockButton = ({format, icon}: {format: string, icon: React.ReactNode}) => {

    const editor = useSlate();
   return (
    <Button
    onMouseDown={(e) => {
      e.preventDefault();
      toggleBlock(editor, format);
    }}
    >
       <Tooltip content={format}>
       <Icon active={isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')}>{icon}</Icon>
      </Tooltip>
    </Button>
   )
}

const isMarkActive = (editor: any, format: string) => {
  const marks: any = Editor.marks(editor);
  return marks ? marks[format] === true : false;
}

const isBlockActive = (editor: any, format: any, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType as keyof typeof n] === format,
    })
  )

  return !!match
}
const toggleMark = (editor: any, format: string) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
}

const toggleBlock = (editor: any, format: string) => {
  const isActive = isBlockActive(editor, format, 'align');

  (Transforms as Transforms).setNodes(editor, {
    align: isActive ? undefined : format,
  });

};

export default Header;