import React, { Component } from 'react';
import './Watch.scss';

class Watch extends Component {
  constructor(props) {
    super();
    this.tick = this.tick.bind(this);

    this.state = {
      secAngle: 0,
      minAngle: 0,
      hourAngle: 0,
      day: 0,
    };
  }

  componentDidMount() {
    // setInterval(this.tick(), 100);
  }

  tick() {
    const date    = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours   = date.getHours();
    const day     = date.getDate();

    const secAngle = seconds * 6;
    const minAngle = minutes * 6 + (seconds * (360 / 3600));
    console.log({ minAngle});
    const hourAngle = hours * 30 + minutes * (360 / 720);
    console.log({seconds});
    console.log({minutes});
    console.log({hours});

    this.setState({
      secAngle,
      minAngle,
      hourAngle,
      day
    });
  }

  renderDialLines() {
    return [...Array(60).keys()].map(i => {
      const rotationDegrees = 6 * (i + 1);
      return (
        <span
          className='diallines'
          style={{ color: 'red', transform: `rotate(${rotationDegrees}deg)` }}

        />
      );
    });
  }

  render() {
    const { secAngle, minAngle, hourAngle } = this.state;

    return (
      <div className='watch'>
        <span style={{ color: 'red '}} />

        <div
          className='sec-hand'
          style={{ transform: `rotate(${secAngle}deg)` }}
        />
        <div
          className='min-hand'
          style={{ transform: `rotate(${minAngle}deg)` }}
        />
        <div
          className='hour-hand'
          style={{ transform: `rotate(${hourAngle}deg)` }}
        />

        <span className='twelve'>12</span>
        <span className='three'>3</span>
        <span className='six'>6</span>
        <span className='nine'>9</span>

        <span className='diallines-container'>
          {this.renderDialLines()}
        </span>

        <div className="date"></div>
      </div>
    );
  }
}

export default Watch;
