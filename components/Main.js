import React, { Component } from 'react';

import Navbar from '../components/Navbar';

import styles from './Main.module.scss';

class Main extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <div className={styles.body}>
          Body
        </div>
        <div className={styles.footer}>
          Footer
        </div>
      </main>
    )
  }
}

export default Main;
