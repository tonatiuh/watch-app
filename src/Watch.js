import React, { Component } from 'react';
import './Watch.scss';

const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

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
    setInterval(this.tick, 100);
  }

  tick() {
    const date    = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours   = date.getHours();
    const day     = date.getDate();
    const month     = date.getMonth();

    const secAngle = seconds * 6;
    const minAngle = minutes * 6;
    const hourAngle = hours * 30;

    this.setState({
      secAngle,
      minAngle,
      hourAngle,
      day,
      month
    });
  }

  renderDialLines() {
    return [...Array(60).keys()].map(i => {
      const rotationDegrees = 6 * (i + 1);
      return (
        <span
          className='diallines'
          style={{ color: 'red', transform: `rotate(${rotationDegrees}deg)` }}
          key={`dialLine-${i}`}

        />
      );
    });
  }

  render() {
    const { secAngle, minAngle, hourAngle, day, month } = this.state;

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

        <div className="date">{day} {monthNames[month]}</div>
      </div>
    );
  }
}

export default Watch;
