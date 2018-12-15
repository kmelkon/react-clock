import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    hours: "",
    minutes: "",
    seconds: "",
    day: "",
    month: "",
    year: ""
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
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
      day: time.getDate(),
      month: time.getMonth() + 1,
      year: time.getFullYear()
    });
  };

  render() {
    const { hours, minutes, seconds, day, month, year } = this.state;
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
