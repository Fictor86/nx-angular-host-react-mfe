import styles from './home.module.scss';
import reactLogo from '../../assets/logo-react.png';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className={styles['container']}>
      <div className='h1-container'>
        <h1>MONOREPO REACT 18.2.0 MFE</h1>
        <img src={reactLogo} alt="logo-react" />
      </div>
    </div>
  );
}

export default Home;
