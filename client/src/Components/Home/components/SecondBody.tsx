import { AiOutlineLayout } from "react-icons/ai";
import { BsCloudCheckFill } from "react-icons/bs";
import { ImParagraphLeft } from "react-icons/im";
import { MdSpellcheck } from "react-icons/md";
import { IoPrintSharp } from "react-icons/io5";

const SecondBody = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center gap-10 items-center px-5 py-2 bg-[whitesmoke]">
        <Div>
        <AiOutlineLayout className="text-blue-500 text-[5rem]"/>
        <p className="font-mono font-bold text-2xl mb-5">Simple Interface</p>
         <p>The notepad features a clean and intuitive design, minimizing unnecessary clutter to provide users with a straightforward and easy-to-navigate interface. It focuses on essential functionalities without overwhelming users with unnecessary complexities. The goal is to make note-taking a seamless and enjoyable experience.</p>
        </Div>
        <Div>
        <BsCloudCheckFill className="text-blue-500 text-[5rem]"/>
        <p className="font-mono font-bold text-2xl mb-5">Autosave</p>
        <p>The locally autosave feature ensures that users' work is automatically saved on their device as they type, eliminating the need for manual saving. This functionality adds an extra layer of security, assuring users that their progress is continuously preserved. Even in the event of a browser or system crash, users can recover their latest edits.</p>
        </Div>
        <Div>
        <ImParagraphLeft className="text-blue-500 text-[5rem]"/>
        <p className="font-mono font-bold text-2xl mb-5">Word Count</p>
        <p>
        The word count feature provides users with real-time information on the number of words in their document. This can be particularly useful for writers, students, or anyone who needs to meet a specific word limit. It helps users keep track of their content's length, making it a handy tool for academic, professional, or creative writing.
        </p>
        </Div>
    </div>
    <div className="flex flex-wrap justify-center gap-10 items-center py-10 px-5 bg-[whitesmoke]">
    <Div>
    <MdSpellcheck className="text-blue-500 text-[5rem]"/>

        <p className="font-mono font-bold text-2xl mb-5">Spell Check</p>
        <p>
        It takes advantage of your browser's native spellchecker to instantly find spelling mistakes. Simply right-click the red underlined word and choose the correct spelling.
        </p>
        </Div>
        <Div>
        <IoPrintSharp className="text-blue-500 text-[5rem]"/>
        <p className="font-mono font-bold text-2xl mb-5">Print</p>
        <p>
        Getting a hard copy of your notes has never been easier. You can prepare the document for printing or save it as a PDF file with a single click of a button enhances the versalitiy of the notepad.
        </p>
        </Div>
    </div>
    </>
  )
}

interface DivProps {
    children?: React.ReactNode;
}
const Div: React.FC<DivProps> = ({children}) => {
    return (
        <div  className=' w-80 py-3 px-4 flex flex-col items-center'>
            {children}
        </div>
    )
}
export default SecondBody