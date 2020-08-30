import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

import '../index.scss';
import styles from '../components/App.module.scss';

export default function App() {
  return (
    <div>
      <Head>
        <title>N&F</title>
        <link rel="icon" href="/static/images/favicon.ico" />
      </Head>
      
      <Navbar />

      <main>
        <div className={styles.headline}>
          We design and build user friendly digital experiences for your product and services.
        </div>
        <div className={styles.subheading}>
          We do UX/UI design, product design, visual design, and website and web app development.
        </div>
        <div className={styles.getInTouchContainer}>
          <img
            src="/static/images/contactButton.svg"
            className={styles.getInTouchButton}
            alt="Get in touch!"
          />
        </div>
      </main>
      
      <footer>
      </footer>
    </div>
  )
};
