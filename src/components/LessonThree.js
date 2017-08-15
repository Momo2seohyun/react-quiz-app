import React, { Component } from "react";
import TextField from 'material-ui/TextField';

class LessonThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    };
  }

  handleChange(e, answer) {
    const value = e.target.value;
    this.setState({
      disabled: false
    })
    this.props.answerThree({
      answer: value
    })
  }

  render() {
    return (
      <div>
        <p>สัตว์ประจำชาติคือ ?</p>
        <TextField hintText="Fill in the Blank" onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}

export default LessonThree