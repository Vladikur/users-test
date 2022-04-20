import { FC, useEffect, useState } from 'react';
import { IUser, IValues } from '../../types/types';
import InputElement from '../InputElement/InputElement';
import styles from './Form.module.scss';

interface FormProps {
  thisUser: IUser;
  isRedact: boolean;
}

const Form: FC<FormProps> = ({ thisUser, isRedact }) => {

  const initialInputsValue: IValues = {
    name: thisUser.name,
    username: thisUser.username,
    email: thisUser.email,
    street: thisUser.address.street,
    city: thisUser.address.city,
    zipcode: thisUser.address.zipcode,
    phone: thisUser.phone,
    website: thisUser.website,
    comment: thisUser.comment,
  }

  const [inputsValue, setinputsValue] = useState<IValues>(initialInputsValue);
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    setinputsValue(initialInputsValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thisUser])

  useEffect(() => {
    if (isRedact &&
        inputsValue.name &&
        inputsValue.username &&
        inputsValue.email &&
        inputsValue.street &&
        inputsValue.city &&
        inputsValue.zipcode &&
        inputsValue.phone &&
        inputsValue.phone &&
        inputsValue.website
      ) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [inputsValue, isRedact])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setinputsValue({
      ...inputsValue,
      [name]: value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userData: IUser = {
      id: thisUser.id,
      name: inputsValue.name,
      username: inputsValue.username,
      email: inputsValue.email,
      address: {
        street: inputsValue.street,
        city: inputsValue.city,
        zipcode: inputsValue.zipcode,
      },
      phone: inputsValue.phone,
      website: inputsValue.website,
      company: {
        name: thisUser.company.name,
      },
      comment: inputsValue.comment,
    }
    console.log(JSON.stringify(userData))
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <InputElement inputName='Name' isRedact={isRedact} name='name' inputValue={inputsValue.name} handleChange={handleChange}/>
      <InputElement inputName='User name' isRedact={isRedact} name='username' inputValue={inputsValue.username} handleChange={handleChange}/>
      <InputElement inputName='E-mail' isRedact={isRedact} name='email' inputValue={inputsValue.email} handleChange={handleChange}/>
      <InputElement inputName='Street' isRedact={isRedact} name='street' inputValue={inputsValue.street} handleChange={handleChange}/>
      <InputElement inputName='City' isRedact={isRedact} name='city' inputValue={inputsValue.city} handleChange={handleChange}/>
      <InputElement inputName='Zip code' isRedact={isRedact} name='zipcode' inputValue={inputsValue.zipcode} handleChange={handleChange}/>
      <InputElement inputName='Phone' isRedact={isRedact} name='phone' inputValue={inputsValue.phone} handleChange={handleChange}/>
      <InputElement inputName='Website' isRedact={isRedact} name='website' inputValue={inputsValue.website} handleChange={handleChange}/>
      <span className={styles.inputName}>Comment</span>
      <textarea disabled={!isRedact} value={inputsValue.comment || ''} onChange={handleChange} name="comment" className={styles.textArea}></textarea>
      <button disabled={!isValid} className={styles.submit} type="submit" >Отправить</button>
    </form>
  );
}

export default Form;
