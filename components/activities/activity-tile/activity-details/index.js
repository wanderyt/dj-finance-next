import React from 'react';

// import './index.scss';

const fontStyle = {
  height: '25px',
  fontSize: '14px',
  lineHeight: '25px',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  padding: '2px',
};

const ActivityDetails = ({type, details}) => {
  const isFloated = details.total % 1 !== 0;
  const formatNumber = (number) => {
    if (isFloated) {
      return parseFloat(number).toFixed(2);
    } else {
      return number;
    }
  }
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
                  ...fontStyle,
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
                  }}>
                  {formatNumber(item.number * item.price)}
                  {/* {item.number} * {item.price} = {item.number * item.price} */}
                </div>
              </div>
            ))
          }
          <div className='Activity--Total'
            style={{
              ...fontStyle,
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
              }}>{formatNumber(details.total)}</div>
          </div>
        </div>
      }
      {
        type === 1 &&
        <div className='Activity--Items'>
          <div className='AmountItem'
            style={{
              ...fontStyle,
              color: '#87909A'
            }}>
            <div className='Amount'
              style={{
                float: 'right'
              }}>
              {/* {details.number} * {details.price} = {details.number * details.price} */}
              {formatNumber(details.number * details.price)}
            </div>
          </div>
          <div className='Activity--Total'
            style={{
              ...fontStyle,
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
              }}>{formatNumber(details.total)}</div>
          </div>
        </div>
      }
    </div>
  );
};

export default ActivityDetails;
