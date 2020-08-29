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
      </main>
      
      <footer>
      </footer>
    </div>
  )
};
