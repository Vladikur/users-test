import { FC, useEffect, useState } from 'react';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import Page from '../Page/Page';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styles from './UsersPage.module.scss';
import { IUser } from '../../types/types';
import { sortOnCity, sortOnCompany } from '../../utils/sort';


const UsersPage: FC = () => {

  const history = useHistory()
  const [users, setUsers] = useState<IUser[]>([])
  const [preloader, setPreloader] = useState<boolean>(true)
  const [sortCities, setSortCities] = useState<boolean>(true);
  const [sortCompanies, setSortCompanies] = useState<boolean>(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      setUsers(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setPreloader(false)
    })
  }, [])

  const handleCitiesSort = () => {
    if (sortCities) {
      const sortUsers = sortOnCity(users)
      setUsers(sortUsers)
      setSortCities(false)
    } else {
      const sortUsers = sortOnCity(users).reverse()
      setUsers(sortUsers)
      setSortCities(true)
    }
  }

  const handleCompaniesSort = () => {
    if (sortCompanies) {
      const sortUsers = sortOnCompany(users)
      setUsers(sortUsers)
      setSortCompanies(false)
    } else {
      const sortUsers = sortOnCompany(users).reverse()
      setUsers(sortUsers)
      setSortCompanies(true)
    }
  }

  const pushToUser = (user: IUser) => {
    history.push(`/${user.id}`)
  }

  return (
    <Page
      sortCities={handleCitiesSort}
      sortCompanies={handleCompaniesSort}
    >
      <h1 className={styles.title}>Список пользователей</h1>
      { preloader ? <Preloader/> : ''}
      {users.map((user) => (
        <Card
          key={user.id}
          user={user}
          more={pushToUser}
        />
      ))}
      <p className={styles.countUsers}>Найдено {users.length} пользователей</p>
    </Page>
  );
}

export default UsersPage;
