import React from 'react';

const JSONLD = ({jsonld}) => {
  let jsonldString = '';
  if (jsonld && typeof jsonld === 'object') {
    try {
      jsonldString = JSON.stringify(jsonld);
    } catch (e) {
      console.log('jsonld parse error: ', e);
    }
  }

  return (
    jsonldString ?
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: jsonldString}}/>
    :
    null
  )
};

export default JSONLD;
