import React from 'react';
import Header from '../components/header';

export default function About() {
  return (
    <div>
      <Header dynamicHeader={true} />
      <p>This is the about page</p>
    </div>
  );
};
