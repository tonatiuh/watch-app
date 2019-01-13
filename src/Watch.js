import React, { Component } from 'react';
import './Watch.scss';

class Watch extends Component {
  render() {
    return (
      <div className='watch'>
        <div className='sec-hand'></div>
        <div className='min-hand'></div>
        <div className='hour-hand'></div>

        <span className='twelve'>12</span>
        <span className='three'>3</span>
        <span className='six'>6</span>
        <span className='nine'>9</span>

        <span className='diallines'></span>
      <div className="date"></div>
      </div>
    );
  }
}

export default Watch;
