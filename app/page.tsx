'use client';

import { useRouter } from 'next/navigation';
import { JSX } from 'react';
import styles from './page.module.css';

const HomePage = (): JSX.Element => {
  const router = useRouter();

  return (
    <main className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <p className={styles.text}>
            You can find everything you want in our catalog
          </p>
          <button
            className={styles.button}
            onClick={() => router.push('/catalog')}
          >
            View Now
          </button>
        </div>
      </section>
    </main>
  );
};
export default HomePage;
