import { ClipLoader } from "react-spinners"
import { css, SerializedStyles } from '@emotion/react'
import React from "react";

const override = css`
  display: flex;
  align-items: 
  margin: 0 auto;
  border-color: red;
`;

interface ClipLoaderProps extends React.ComponentProps<typeof ClipLoader>  {
 css?: SerializedStyles
};

const MyClipLoader: React.FC<ClipLoaderProps> = (props) => {
    return <ClipLoader {...props} />
}
const Loader = () => {
  return (
    <MyClipLoader color={'#36D7B7'} loading={true} css={override} size={10} />
  )
}

export default Loader