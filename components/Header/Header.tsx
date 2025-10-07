'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';
const Header = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Home">
        <svg className={styles.headerLogo}>
          <use href="./campers-sprite.svg#campers-logo" />
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
