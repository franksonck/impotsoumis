import React from 'react';
import numeral from 'numeral';

import AnimatedNumber from './AnimatedNumber.jsx';
import './ResultChart.css';

export default ({ center, color, left, right }) => {
  let leftRatio, rightRatio;
  if (!center) {
    leftRatio = left * 100 / (left + right);
    rightRatio = 100 - leftRatio;
    if (leftRatio < 22) {
      leftRatio = 22;
      rightRatio = 78;
    }
    if (rightRatio < 22) {
      leftRatio = 78;
      rightRatio = 22;
    }
  }

  return (
    <div className={`ResultChart ${color}`}>
      {(center !== false) ?
        <span className="center">
          {center}
        </span>
      :
        <div>
          <span
            className="left"
            style={{width: `${leftRatio}%`}}
          >
            {left}
          </span>
          <span
            className="right"
            style={{width: `${rightRatio}%`}}
          >
            {right}
          </span>
        </div>
      }
    </div>
  );
};
