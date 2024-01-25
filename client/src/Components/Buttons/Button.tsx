import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    onMouseDown?: MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({ children, onMouseDown }) => {
    return(
     <button
     onMouseDown={onMouseDown}
     className='px-2 py-1'
     >{children}</button>
  )
}

export default Button;
