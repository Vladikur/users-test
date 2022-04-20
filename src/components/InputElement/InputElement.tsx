import { FC } from 'react';
import styles from './InputElement.module.scss';

interface InputElementProps {
  inputName: string;
  name: string;
  isRedact: boolean;
  inputValue: string;
  handleChange: (e: any) => void;
}

const InputElement: FC<InputElementProps> = ({ inputName, isRedact, inputValue, name, handleChange}) => {
  return (
    <div className={styles.imputContainer}>
      <span className={styles.inputName}>{inputName}</span>
      <input disabled={!isRedact} value={inputValue} onChange={(e) => handleChange(e)} type="text" name={name} required className={inputValue ? styles.input : styles.inputError}></input>
    </div>
  );
}

export default InputElement;
