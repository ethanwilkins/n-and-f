import React from 'react';
import Head from 'next/head';

import Main from '../components/Main';

import '../index.scss';

export default function App() {
  return (
    <div>
      <Head>
        <title>N&F</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
};
