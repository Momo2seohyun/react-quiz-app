import React, { Component } from "react";
import Slider from 'material-ui/Slider';

class LessonTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      sliderValue: 0,
    };
  }

  handleSlider(e, value) {
    this.setState({
      disabled: false,
      sliderValue: value
    });
    this.props.answerTwo({
      num: value
    })
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.question} className={`${this.props.titleColor}`}>
          <h5>1 + 1 = ?</h5>
        </div>
        <div style={styles.answer}>
          <h5 style={styles.point}>{this.state.sliderValue}</h5>
          <Slider
          min={0}
          max={5}
          step={1}
          value={this.state.sliderValue}
          onChange={this.handleSlider.bind(this)}
          />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  question: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2em 1em'
  },
  answer: {
    padding: '2em 5em'
  },
  point: {
    color: 'rgb(0, 188, 212)',
    fontSize: '100px'
  }
};

export default LessonTwo