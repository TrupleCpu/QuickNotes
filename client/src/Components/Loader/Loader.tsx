import { ClipLoader } from "react-spinners"
import { css } from '@emotion/react'

const override = css`
  display: flex;
  align-items: 
  margin: 0 auto;
  border-color: red;
`;
const Loader = () => {
  return (
    <ClipLoader color={'#36D7B7'} loading={true} css={override} size={10} />
  )
}

export default Loader