import { ReactNode, FC } from 'react';
import Button from '../Button/Button';
import styles from './Page.module.scss';

interface PageProps {
  children: ReactNode;
  sortCities?: () => void;
  sortCompanies?: () => void;
}

const Page: FC<PageProps> = ({children, sortCities, sortCompanies}) => {
  return (
    <div className={styles.page}>
      <div className={styles.sortContainer}>
        <span className={styles.sortText}>Сортировка</span>
        <Button onClick={sortCities ? sortCities : () => {}}>по городу</Button>
        <Button onClick={sortCompanies ? sortCompanies : () => {}}>по компании</Button>
      </div>
      <div className={styles.contentContainer}>
        {children}
      </div>
    </div>
  );
}

export default Page;
