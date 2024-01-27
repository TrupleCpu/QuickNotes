import React, { useState } from 'react'

interface toolTipProps {
    children?: React.ReactNode,
    content?: React.ReactNode
}

const Tooltip:React.FC<toolTipProps> = ({children, content}) => {
    const [show, setShow] = useState<boolean>(false)

  return (
    <div
    onMouseEnter={() => setShow(true)}
    onMouseLeave={() => setShow(false)}
    className='relative'
    >{show && <div className='invisible md:visible lg:visible absolute mt-7 text-xs bg-[whitesmoke] rounded-sm dark:bg-[#2a2a2a] text-center px-2 dark:text-white'>{content}</div>}
    {children}
    </div>
  )
}

export default Tooltip