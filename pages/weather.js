import React from 'react';
import Header from '../components/header';
import Axios from 'axios';

class Weather extends React.Component {
  static getInitialProps() {
    return Axios('https://www.apiopen.top/weatherApi')
      .then(({data}) => {
        return {
          data
        };
      });
  }

  render() {
    let {data: weather} = this.props;
    return (
      <div>
        <Header />
        {
          weather.code ?
          <div className='Weather'>
            <div className='City'>北京</div>
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
  }
}

export default Weather;
