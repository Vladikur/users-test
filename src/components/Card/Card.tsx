import { FC } from 'react';
import { IUser } from '../../types/types';
import './Card.scss';

interface CardProps {
  user: IUser;
  more: (user: IUser) => void;
}


const Card: FC<CardProps> = ({ user, more }) => {
  return (
    <div className='card'>
      <p className='card__info'>
        <span className='card__info_name_string'>ФИO: </span> {user.name}
      </p>
      <p className='card__info'>
        <span className='card__info_name_string'>город: </span> {user.address.city}
      </p>
      <p className='card__info'>
        <span className='card__info_name_string'>компания: </span> {user.company.name}
      </p>
      <button onClick={() => more(user)} className='card__more'>Подробнее</button>
    </div>
  );
}

export default Card;
