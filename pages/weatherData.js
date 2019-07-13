import React, { useState, useEffect } from 'react';
import Header from '../components/header';

const wheather = {"code":200,"msg":"成功!","data":{"yesterday":{"date":"10日星期三","high":"高温 26℃","fx":"北风","low":"低温 22℃","fl":"\u003c![CDATA[3-4级]]\u003e","type":"小雨"},"city":"上海","aqi":null,"forecast":[{"date":"11日星期四","high":"高温 28℃","fengli":"\u003c![CDATA[\u003c3级]]\u003e","low":"低温 23℃","fengxiang":"东南风","type":"小雨"},{"date":"12日星期五","high":"高温 28℃","fengli":"\u003c![CDATA[3-4级]]\u003e","low":"低温 23℃","fengxiang":"东南风","type":"小雨"},{"date":"13日星期六","high":"高温 25℃","fengli":"\u003c![CDATA[3-4级]]\u003e","low":"低温 22℃","fengxiang":"东风","type":"大雨"},{"date":"14日星期天","high":"高温 29℃","fengli":"\u003c![CDATA[\u003c3级]]\u003e","low":"低温 22℃","fengxiang":"东风","type":"多云"},{"date":"15日星期一","high":"高温 31℃","fengli":"\u003c![CDATA[3-4级]]\u003e","low":"低温 23℃","fengxiang":"东风","type":"小雨"}],"ganmao":"各项气象条件适宜，无明显降温过程，发生感冒机率较低。","wendu":"27"}};

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setWeather(wheather);
    }, 1000);
  }, []);

  return (
    <div>
      <Header />
      {
        weather.code ?
        <div className='Weather'>
          <div className='City'>上海</div>
          {
            weather.data.forecast.map((item, index) => (
              <div className='Weather__ForecastItem' key={index}>
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
