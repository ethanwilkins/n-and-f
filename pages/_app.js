import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';

import '../index.scss';

export default function App() {
  return (
    <div>
      <Head>
        <title>N&F</title>
        <link rel="icon" href="/static/images/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
    </div>
  )
};
