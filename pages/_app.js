import React from 'react';
import Head from 'next/head';
import Main from '../components/Main';

import '../index.scss';

export default function App() {
  return (
    <div>
      <Head>
        <title>N&F</title>
        <link rel="icon" href="/static/images/favicon.ico" />
        
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <meta
          name="description"
          content="We do UX/UI design, product design, visual design, and website and web app development."
        />
      </Head>

      <Main />
    </div>
  )
};
