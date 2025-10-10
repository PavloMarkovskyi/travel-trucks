'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';
const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Home">
        <svg className={styles.headerLogo}>
          <use href="/logo.svg#logo" />
        </svg>
      </Link>
      <div className={styles.headerLink}>
        <Link
          href="/"
          className={pathname === '/' ? styles.active : undefined}
          aria-label="Home"
        >
          Home
        </Link>
        <Link
          href="/catalog"
          className={
            pathname.startsWith('/catalog') ? styles.active : undefined
          }
        >
          Catalog
        </Link>
      </div>
    </header>
  );
};

export default Header;
