import styles from './home.module.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  console.log('component: home.tsx');

  return (
    <div className={styles['container']}>
      <h1>REACT MICROFRONT HOMEPAGE</h1>
    </div>
  );
}

export default Home;
