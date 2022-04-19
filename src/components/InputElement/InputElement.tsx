import { FC } from 'react';
import './InputElement.scss';

interface InputElementProps {
  inputName: string;
  name: string;
  isRedact: boolean;
  inputValue: string;
  handleChange: (e: any) => void;
}

const InputElement: FC<InputElementProps> = ({ inputName, isRedact, inputValue, name, handleChange}) => {
  return (
    <div className="imput">
      <span className="form__input-name">{inputName}</span>
      <input disabled={!isRedact} value={inputValue} onChange={(e) => handleChange(e)} type="text" name={name} required className={`form__input ${ inputValue ? '' : 'form__input_type_error'}`}></input>
    </div>
  );
}

export default InputElement;
