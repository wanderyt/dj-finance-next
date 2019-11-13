import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const linkStyle = {
  margin: '0 10px',
  textDecoration: 'none'
};

const Header = ({dynamicHeader}) => (
  <div>
    <Head>
      {/* <title>{`东方锦绣幼儿园五班账本 ${dynamicHeader ? ' - ' + new Date() : ''}`}</title> */}
      <title>东方锦绣幼儿园五班账本</title>
      <link rel="icon" type="image/x-icon" href="/static/newfavicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* <div>
      <Link href="/">
        <a style={linkStyle}>Home Page</a>
      </Link>
      <Link href="/weatherApi">
        <a style={linkStyle}>天气 api</a>
      </Link>
      <Link href="/weatherData">
        <a style={linkStyle}>天气 数据</a>
      </Link>
      <Link href="/weather">
        <a style={linkStyle}>实时天气</a>
      </Link>
    </div> */}
  </div>
);

export default Header;