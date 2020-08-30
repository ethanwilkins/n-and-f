import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../components/HomePage.module.scss';

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <main>
        <div className={styles.headline}>
          We design and build user friendly digital experiences for your product and services.
        </div>
      </main>
      
      <footer>
      </footer>
    </div>
  )
};
