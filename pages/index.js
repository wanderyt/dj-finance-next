import React from 'react';
import Header from '../components/header';

import Activities from '../components/activities';
import {useRouter} from 'next/router';

const Index = () => {
  const router = useRouter();
  const {asPath} = router;
  const search = asPath.split('?')[1] || '';
  const keyContent = search.split('&').some((item) => {
    let itemArray = item.split('=');
    let [key, value] = itemArray;
    return key === 'keyContent' && value === 'true';
  });

  const keyContentPush = search.split('&').some((item) => {
    let itemArray = item.split('=');
    let [key, value] = itemArray;
    return key === 'keyContentPush' && value === 'true';
  });

  return (
    <div>
      <Header dynamicHeader={true} />
      <Activities keyContent={keyContent} keyContentPush={keyContentPush} />
    </div>
  );
};

export default Index;
