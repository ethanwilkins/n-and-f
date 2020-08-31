import React from 'react';

import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarInner}>
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
      
      <div className={styles.menu}>
        <img
          src="static/images/x.svg"
          className={styles.xButton}
          alt="X"
        />
        <div className={styles.menuItem}>
          Work
        </div>
        <div className={styles.menuItem}>
          Contact
        </div>
      </div>
    </div>
  )
};
