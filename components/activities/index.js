import React, { useState } from 'react';
import ActivityTile from './activity-tile';
import ACTIVITIES from './activities-data';

// import './index.scss';

// const TYPE_INCOME = 1; // 收入
// const TYPE_OUTCOME = 2; // 支出

const Activities = ({keyContent, keyContentPush}) => {
  const [linkClicked, setLinkClicked] = useState(keyContent);
  const [linkPushed, setLinkPushed] = useState(keyContentPush);

  let leftAmount = 0;
  ACTIVITIES.forEach((item) => {
    if (item.type === 1) {
      leftAmount += item.amount;
    } else {
      leftAmount -= item.amount;
    }
  });

  const keyContentHandler = (e) => {
    setLinkClicked(true);
    setLinkPushed(false);
  }

  const keyContentPushHandler = (e) => {
    e.preventDefault();
    window.history.pushState({}, null, '?keyContentPush=true');
    setLinkPushed(true);
    setLinkClicked(false);
  }

  return (
    <div
      className='Activities'>
      <div className='KeyContent'>
        {
          linkClicked &&
          <div className='KeyContent-Container'>
            本网站旨在提供中五班账本信息，同时作为项目测试网站。本信息为a链接点击生成。
          </div>
        }
        {
          linkPushed &&
          <div className='KeyContentPush-Container'>
            本网站旨在提供中五班账本信息，同时作为项目测试网站。本信息为pushState生成。
          </div>
        }
        <div>
          <a href='?keyContent=true' onClick={keyContentHandler}>
            <span>查看关键信息</span>
          </a>
        </div>
        <div>
          <a href='?keyContentPush=true' onClick={keyContentPushHandler}>
            <span>查看关键信息2</span>
          </a>
        </div>
      </div>
      <div
        className='Activities--LeftArea'
        style={{
          backgroundColor: '#FFF',
          textAlign: 'center',
          padding: '10px 0 0',
          fontSize: '18px',
          lineHeight: '30px',
          height: '30px',
        }}>
        <span
          className='Activities--LeftCaption'
          style={{
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
          }}>剩余金额：</span>
        <span
          className='Activities--LeftAmount'
          style={{
            color: 'rgba(4, 97, 24, 0.473)',
            fontWeight: 'bold'
          }}>{leftAmount}</span>
      </div>
      <div
        className='Activities--List'
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap'
        }}>
        {
          ACTIVITIES.map((item) => (
            <div
              className='ActivityTile-Item'
              style={{
                margin: '10px',
                width: '90%',
                minWidth: '180px'
              }}
              key={item.id}>
              <ActivityTile {...item} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Activities;
