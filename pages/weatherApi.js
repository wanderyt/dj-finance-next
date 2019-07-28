import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import JSONLD from '../components/jsonld';
import Axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    Axios.get('https://www.apiopen.top/weatherApi?city=上海')
    // Axios.get('/api/weather/getWeather')
      .then(({data}) => {
        setWeather(data);
      });
  }, []);

  const jsonld = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@id": "/",
        "name": "Home"
      }
    }, {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@id": "/weather/",
        "name": "weather"
      }
    }, {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@id": "/weatherApi/",
        "name": "weather api"
      }
    }]
  };

  return (
    <div>
      <Header dynamicHeader={true} />
      <JSONLD jsonld={jsonld} />
      {
        weather.code ?
        <div className='Weather'>
          <div
            className='City'
            style={{
              margin: '10px auto',
              padding: '10px'
            }}>上海</div>
          {
            weather.data.forecast.map((item, index) => (
              <div
                className='Weather__ForecastItem'
                key={index}
                style={{
                  maxWidth: '300px',
                  margin: '10px',
                  padding: '10px',
                  boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                  borderRadius: '4px',
                  backgroundColor: '#FFF'
                }}>
                <div className='Date'>{item.date}</div>
                <div className='Temporature'>{`${item.high} - ${item.low}`}</div>
                <div className='Type'>{item.type}</div>
                <div className='WindDirection'>{item.fengxiang}</div>
              </div>
            ))
          }
        </div>
        :
        null
      }
    </div>
  );
};

export default Weather;
