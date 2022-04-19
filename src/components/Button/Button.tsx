import { ReactNode, FC } from 'react';
import './Button.scss';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}


const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={() => onClick()} className="button" type='button'>{children}</button>
  );
}

export default Button;
