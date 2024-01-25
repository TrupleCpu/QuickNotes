import React, { ReactNode } from 'react';

interface IconProps {
  children: ReactNode;
  active: boolean;
}

const Icon: React.FC<IconProps> = ({active, children }) => {
  return <span className={active ? 'text-black dark:text-white' : 'text-gray-400 hover:text-[gray]'}>{children}</span>;
};

export default Icon;
