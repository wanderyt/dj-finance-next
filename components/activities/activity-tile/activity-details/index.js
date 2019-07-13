import React from 'react';

// import './index.scss';

const ActivityDetails = ({type, details}) => {
  return (
    <div className='ActivityDetails'>
      {
        type === 2 &&
        <div className='Activity--Items'>
          {
            details.items.map((item) => (
              <div
                className='AmountItem'
                style={{
                  height: '20px',
                  fontSize: '12px',
                  lineHeight: '20px',
                  color: '#87909A'
                }}>
                <div
                  className='AmountName'
                  style={{
                    float: 'left'
                  }}>{item.name}</div>
                <div
                  className='Amount'
                  style={{
                    float: 'right'
                  }}>{item.number} x {item.price} = {item.number * item.price}</div>
              </div>
            ))
          }
          <div className='Activity--Total'
            style={{
              height: '20px',
              fontSize: '15px',
              lineHeight: '20px',
              fontWeight: 'bold',
              borderTop: '1px solid #87909A'
            }}>
            <div className='Activity--TotalAmountCaption'
              style={{
                float: 'left'
              }}>总计</div>
            <div className='Activity--TotalAmount'
              style={{
                float: 'right'
              }}>{details.total}</div>
          </div>
        </div>
      }
      {
        type === 1 &&
        <div className='Activity--Items'>
          <div className='AmountItem'
            style={{
              height: '20px',
              fontSize: '12px',
              lineHeight: '20px',
              color: '#87909A'
            }}>
            <div className='Amount'
              style={{
                float: 'right'
              }}>{details.number} x {details.price} = {details.number * details.price}</div>
          </div>
          <div className='Activity--Total'
            style={{
              height: '20px',
              fontSize: '15px',
              lineHeight: '20px',
              fontWeight: 'bold',
              borderTop: '1px solid #87909A'
            }}>
            <div className='Activity--TotalAmountCaption'
              style={{
                float: 'left'
              }}>总计</div>
            <div className='Activity--TotalAmount'
              style={{
                float: 'right'
              }}>{details.total}</div>
          </div>
        </div>
      }
    </div>
  );
};

export default ActivityDetails;
