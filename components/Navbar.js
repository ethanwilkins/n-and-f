import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


export default function Navbar(props) {
  // whether or not the menu is open
  const [open, setOpen] = useState(false);
  
  const handleWorkButtonClick = () => {
    props.handleWorkButtonClick();
    setOpen(false);
  };
  
  const handleContactButtonClick = () => {
    props.handleContactButtonClick();
    setOpen(false);
  };
  
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
        
        <div className={styles.menuDesktop}>
          <div
            onClick={handleWorkButtonClick}
            className={styles.menuItemDesktop}
          >
            Work
          </div>
          <div
            onClick={handleContactButtonClick}
            className={styles.menuItemDesktop}
          >
            Contact
          </div>
        </div>
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
          <div
            onClick={handleWorkButtonClick}
            className={styles.menuItem}
          >
            Work
          </div>
          <div
            onClick={handleContactButtonClick}
            className={styles.menuItem}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  )
};

Navbar.propTypes = {
  handleWorkButtonClick: PropTypes.func.isRequired,
  handleContactButtonClick: PropTypes.func.isRequired
};
