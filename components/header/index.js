import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Head>
      <title>东方锦绣幼儿园五班账本</title>
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Link href="/">
      <a>Home Page</a>
    </Link>
    <Link href="/weatherApi">
      <a>天气 api</a>
    </Link>
    <Link href="/weatherData">
      <a>天气 数据</a>
    </Link>
  </div>
);

export default Header;