import React, {useState} from 'react';
import {formatDate} from '../util';

// import './index.scss';
import ActivityDetails from './activity-details';

const ActivityTile = ({name, date, amount, type, details}) => {
  let [isExpanded, setIsExpanded] = useState(false);

  const expandDetails = () => {
    setIsExpanded(true);
  };

  const foldItem = () => {
    setIsExpanded(false);
  }

  return (
    <div
      className='ActivityTile'
      style={{
        minWidth: '150px',
        boxShadow: `0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)`,
        borderRadius: '4px',
        backgroundColor: '#FFF'
      }}>
      <div
        className='Activity--Item Activity--Header'
        style={{
          padding: '0 10px 10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '10px'
        }}>
        <div className='Activity--Caption'>
          <div
            className='Activity--Name'
            style={{
              color: 'rgba(0, 0, 0, 0.87)',
              fontSize: '17px',
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 'bold',
              margin: '2px 0',
              letterSpacing: '0.15px'
            }}>{name}</div>
          <div
            className='Activity--Date'
            style={{
              color: 'rgba(0, 0, 0, 0.54)',
              fontSize: '14px',
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: '400',
              margin: '2px 0',
              letterSpacing: '0.15px'
            }}>{formatDate(date)}</div>
        </div>
        <div
          className='Activity--AmountArea'
          style={{
            fontSize: '20px',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 'bold',
            lineHeight: '21px',
            letterSpacing: '0.15px'
          }}>
          <div
            className={`Activity--Amount ${type === 1 ? 'Activity--Income' : 'Activity--Outcome'}`}>
            {amount}
          </div>
        </div>
      </div>
      {
        isExpanded && details &&
        <div
          className='Activity--Item'
          style={{
            padding: '0 10px 10px'
          }}>
          <ActivityDetails type={type} details={details} />
        </div>
      }
      <div
        className='Activity--Item Activity--Toolbar'
        style={{
          padding: '0 6px 10px',
        }}>
        {
          !isExpanded ?
          <div
            className='Activity--LearnMore'
            style={{
              minWidth: '64px',
              margin: '0 4px',
              fontSize: '0.8125rem',
              color: '#2196F3',
              cursor: 'pointer'
            }}
            onClick={expandDetails}>
            查看明细
          </div>
          :
          <div
            className='Activity--Fold'
            style={{
              minWidth: '64px',
              margin: '0 4px',
              fontSize: '0.8125rem',
              color: '#2196F3',
              cursor: 'pointer'
            }}
            onClick={foldItem}>
            收起
          </div>
        }
      </div>
      <style jsx>{`
        .Activity--Income {
          color: rgba(4, 97, 24, 0.473);
        }
        .Activity--Income::before {
          content: '+ ';
          color: rgba(4, 97, 24, 0.473);
        }
        .Activity--Outcome {
          color: rgba(238, 37, 30, 0.979);
        }
        .Activity--Outcome::before {
          content: '- ';
          color: rgba(238, 37, 30, 0.979);
        }
      `}</style>
    </div>
  );
};

export default ActivityTile;
