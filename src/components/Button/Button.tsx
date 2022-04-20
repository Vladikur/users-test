import { ReactNode, FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}


const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={() => onClick()} className={styles.button} type='button'>{children}</button>
  );
}

export default Button;
