import { ReactNode, FC } from 'react';
import Button from '../Button/Button';
import './Page.scss';

interface PageProps {
  children: ReactNode;
  sortCities?: () => void;
  sortCompanies?: () => void;
}

const Page: FC<PageProps> = ({children, sortCities, sortCompanies}) => {
  return (
    <div className="page">
      <div className="page__sort-container">
        <span className="page__sort-text">Сортировка</span>
        <Button onClick={sortCities ? sortCities : () => {}}>по городу</Button>
        <Button onClick={sortCompanies ? sortCompanies : () => {}}>по компании</Button>
      </div>
      <div className="page__content-container">
        {children}
      </div>
    </div>
  );
}

export default Page;
