import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div className = "TimelineEvent">
      <ul>
        <li>{props.person}</li>
        <li>{props.status}</li>
        <li>{props.timeStamp}</li>
      </ul>
    </div>
  );
}

export default TimelineEvent;