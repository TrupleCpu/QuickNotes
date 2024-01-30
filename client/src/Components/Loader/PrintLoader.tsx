import { ClipLoader } from "react-spinners"
import { css, SerializedStyles } from '@emotion/react'
import React from "react";
import { useAppContext } from "../Context/AppContextProvider";

const override = css`
  display: flex;
  align-items: 
  margin: 0 auto;
  border-color: red;
  position: absoulute;
`;

interface ClipLoaderProps extends React.ComponentProps<typeof ClipLoader>  {
 css?: SerializedStyles
};

const MyClipLoader: React.FC<ClipLoaderProps> = (props) => {
    return <ClipLoader {...props} />
}
const PrintLoader = () => {
  const {printLoader} = useAppContext()

  return (
   <>
   {printLoader && 
    <div className="fixed px-5 py-5 rounded-lg flex-col bg-white dark:bg-[#1e1e1e] flex items-center justify-center ">
    <MyClipLoader  color={''} loading={true} css={override} size={100} />
    <p className="dark:text-white font-semibold">Preparing to Print</p>
</div>
   }
   </>
  )
}

export default PrintLoader