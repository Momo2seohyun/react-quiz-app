import React, { Component } from "react";
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

class radioBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    };
  }

  changeColor(e, answer) {
    const value = e.target.value;
    this.setState({
      disabled: false
    })
    this.props.answerRadioBtn({
      answer: value
    })
  }

  render() {
    let { data } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.question} className={`${this.props.titleColor}`}>
          <h5>{data.question}</h5>
        </div>
        <div style={styles.answer}>
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={this.changeColor.bind(this)}>
          {data.answer.map((answer) => <RadioButton value={answer.value} label={answer.label} style={styles.radioButton} key={answer.value} />)}
          </RadioButtonGroup>
        </div>
      </div>
    )
  }
}

const styles = {
  radioButton: {
    marginBottom: 16,
  },
  container: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  question: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2em 1em'
  },
  answer: {
    padding: '2em 1em'
  }
};

export default radioBtn