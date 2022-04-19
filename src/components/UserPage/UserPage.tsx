import { FC, useEffect, useState  } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserPage.scss';
import Page from '../Page/Page';
import Form from '../Form/Form';
import Button from '../Button/Button';
import { IUser } from '../../types/types';
import { userInitialState } from '../../constants/constants';

interface UserItemPageParams {
  id: string;
}


const UserPage: FC = () => {

  const [user, setUser] = useState<IUser>(userInitialState)
  const [isRedact, setIsRedact] = useState<boolean>(false);
  const params = useParams<UserItemPageParams>()

  useEffect(() => {
    axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(res => {
      setUser(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [params.id])

  const redactForm = () => {
    if (isRedact) {
      setIsRedact(false)
    } else {
      setIsRedact(true)
    }
  }

  return (
    <Page>
      <div className="user-page__header-container">
        <h1 className="app__title">Профиль пользоваетля</h1>
        <Button onClick={redactForm} >Редактироввать</Button>
      </div>
      <Form
        thisUser={user}
        isRedact={isRedact}
      />
    </Page>
  );
}

export default UserPage;
