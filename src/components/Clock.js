import React, { Component } from "react";
import "./clock.css";

class Clock extends Component {
  state = {
    hours: "",
    twelveHours: "",
    minutes: "",
    seconds: "",
    day: "",
    month: "",
    year: "",
    formatSwitchTo12: false
  };

  componentDidMount = () => {
    // Call this function so that it fetch first time right after mounting the component
    this.getCurrentTime();

    // set Interval
    this.interval = setInterval(this.getCurrentTime, 1000);
  };

  componentWillUnmount() {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
  }

  getCurrentTime = () => {
    let time = new Date();
    this.setState({
      hours: time.getHours(),
      twelveHours:
        time.getHours() > 12 ? time.getHours() - 12 : time.gethours(),
      minutes:
        time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes(),
      seconds:
        time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds(),
      day: time.getDate(),
      month: time.getMonth() + 1,
      year: time.getFullYear()
    });
  };

  switchTimeFormat = () => {
    const { formatSwitchTo12 } = this.state;
    this.setState({
      formatSwitchTo12: !formatSwitchTo12
    });
  };

  render() {
    const {
      hours,
      twelveHours,
      minutes,
      seconds,
      day,
      month,
      year,
      formatSwitchTo12
    } = this.state;
    return (
      <div className="App">
        <div>
          {" "}
          the current time is {formatSwitchTo12 ? twelveHours : hours}:{minutes}
          :{seconds}
          {formatSwitchTo12 && (twelveHours < 12 ? " PM" : " AM")}
        </div>
        <div>
          today's date is {day}/{month}/{year}
        </div>
        Switch {formatSwitchTo12 ? "back 24h format" : "to 12h format"}
        <div>
          <label className="switch">
            <input
              type="checkbox"
              defaultChecked={formatSwitchTo12}
              onChange={this.switchTimeFormat}
            />
            <span className="slider round" />
          </label>
        </div>
      </div>
    );
  }
}

export default Clock;
