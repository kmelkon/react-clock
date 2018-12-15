import React, { Component } from "react";
import "./App.css";

class App extends Component {
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

  render() {
    const {
      hours,
      twelveHours,
      minutes,
      seconds,
      day,
      month,
      year
    } = this.state;
    return (
      <div className="App">
        <div>
          {" "}
          the current time is {hours}:{minutes}:{seconds}
        </div>
        <div>
          today's date is {day}/{month}/{year}
        </div>
      </div>
    );
  }
}

export default App;
