import React, { useState } from 'react';

import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


export default function Navbar() {
  // whether or not the menu is open
  const [open, setOpen] = useState(false);
  
  return (
    <div className={styles.navbar}>
      <div
        className={cx(styles.navbarInner, {
          fadedOut: open
        })}
      >
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
        <div
          onClick={() => setOpen(true)}
          className={styles.xTouchTarget}
        ></div>
      </div>
      <div
        className={cx(styles.navbarInner, {
          fadedOut: !open
        })}
      >
        <div className={styles.menu}>
          <img
            src="static/images/x.svg"
            className={styles.xButton}
            alt="X"
          />
          <div
            onClick={() => setOpen(false)}
            className={styles.xTouchTarget}
          ></div>
          <div className={styles.menuItem}>
            Work
          </div>
          <div className={styles.menuItem}>
            Contact
          </div>
        </div>
      </div>
    </div>
  )
};
