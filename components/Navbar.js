import React from 'react';

import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <img
        src="/static/images/logo.svg"
        className={styles.logo}
        alt="Logo"
      />
      
      <img
        src="/static/images/hamburger.svg"
        className={styles.hamburger}
        alt="Logo"
      />
      <div className={styles.hamburgerTouchTarget}></div>
    </div>
  )
};
