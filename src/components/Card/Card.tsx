import { FC } from 'react';
import { IUser } from '../../types/types';
import styles from './Card.module.scss';

interface CardProps {
  user: IUser;
  more: (user: IUser) => void;
}


const Card: FC<CardProps> = ({ user, more }) => {
  return (
    <div className={styles.card}>
      <p className={styles.info}>
        <span className={styles.infoName}>ФИO: </span> {user.name}
      </p>
      <p className={styles.info}>
        <span className={styles.infoName}>город: </span> {user.address.city}
      </p>
      <p className={styles.info}>
        <span className={styles.infoName}>компания: </span> {user.company.name}
      </p>
      <button onClick={() => more(user)} className={styles.more}>Подробнее</button>
    </div>
  );
}

export default Card;
