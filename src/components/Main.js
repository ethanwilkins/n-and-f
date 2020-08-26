import React, { Component } from 'react';

import Navbar from '../components/Navbar';

import styles from '../styles/Main.module.scss';

class Main extends Component {
  componentDidMount() {
    if (false) {
      this.showSpecs();
    }
  }
  
  showSpecs = () => {
    const specs = {
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      availScreenWidth: window.screen.availWidth,
      availScreenHeight: window.screen.availHeight,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      orientation: (window.orientation === 0 ? 'portrait' : 'landscape'),
      devicePixelRatio: window.devicePixelRatio,
      userAgent: navigator.userAgent
    };
    alert(JSON.stringify(specs));
  };
  
  render() {
    return (
      <div>
        <Navbar />
        <div className={styles.body}>
          Body
        </div>
        <div className={styles.footer}>
          Footer
        </div>
      </div>
    );
  }
}

export default Main;
