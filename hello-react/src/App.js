import React, { Component } from 'react';
// import EventPractice from "./EventPractice"
// import ValidationSample from "./ValidationSample"
// import ScrollBox from './ScrollBox'
// import Iteration from './IterationSample'
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundry from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#333333',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      // <div>
      //   <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      // </div>

      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundry>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
