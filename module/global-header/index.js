import React from 'react';
import Navigator from '../navigator';

import './index.scss';

const GlobalHeader = (props) => {
  return (
    <div className='GlobalHeader'>
      <div className='GlobalHeader__Navigator'>
        <Navigator />
      </div>
    </div>
  )
};

export default GlobalHeader;
