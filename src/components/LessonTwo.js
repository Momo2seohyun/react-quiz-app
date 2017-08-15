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
      <div>
        <p>1 + 1 = ?</p>
        <p>{this.state.sliderValue}</p>
        <Slider
        min={0}
        max={5}
        step={1}
        value={this.state.sliderValue}
        onChange={this.handleSlider.bind(this)}
        />
      </div>
    )
  }
}

export default LessonTwo